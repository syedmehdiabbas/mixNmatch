import React, { useRef, useState } from 'react';
import { Button, HStack, VStack, Select } from '@chakra-ui/react';
import {
  storage,
  ref,
  uploadBytes,
  addDoc,
  db,
  collection,
} from './../firebase/firebase';

function Upload() {
  const uploadRef = useRef(null);

  const [text, setText] = useState('Select Image');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const handleClick = () => {
    uploadRef.current.click();
  };

  const addToFirestore = async (category, imageUrl) => {
    if (category === '') return;
    try {
      const docRef = await addDoc(collection(db, category), {
        color: 'yellow',
        url: imageUrl,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const upload = () => {
    if (image == 'null') return;
    const storageRef = ref(storage, image.name);

    uploadBytes(storageRef, image).then(snapshot => {
      let imageUrl = `https://firebasestorage.googleapis.com/v0/b/${snapshot.metadata.bucket}/o/${snapshot.metadata.fullPath}?alt=media`;

      addToFirestore(category, imageUrl);
    });
  };

  return (
    <VStack minH="90vh" justifyContent="center" spacing={12}>
      <Select
        onChange={e => setCategory(e.target.value)}
        variant="filled"
        width={['10rem', '15rem', '20rem']}
        placeholder="Select Category"
      >
        <option value="tops">Top</option>
        <option value="bottoms">Bottom</option>
        <option value="shoes">Shoes</option>
      </Select>
      <HStack spacing={0} justifyContent="center">
        <input
          ref={uploadRef}
          type="file"
          accept="image/png, image/jpeg"
          hidden
          onChange={e => {
            setText(e.target.files[0].name);
            setImage(e.target.files[0]);
          }}
        ></input>

        <Button
          minW={['10rem', '15rem', '20rem']}
          color="tomato"
          variant="outline"
          onClick={handleClick}
          border="2px solid "
          borderRadius="sm"
        >
          {text}
        </Button>
        <Button onClick={upload} bg="tomato" variant="solid" borderRadius="sm">
          Upload
        </Button>
      </HStack>
    </VStack>
  );
}

export default Upload;
