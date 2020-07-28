import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import getSampleBookData from './BookPresenter';

const BookComponent = () => {
  //why is this not working??
  // const [bookData, setBookData] = useState([{pages: -1, title: 'Untitled'}]);
  const [bookName, setBookName] = useState('Untitled');

  const getSampleBookDataHandler = () => {
    const book = getSampleBookData();
    setBookName(book.title);
  };

  return (
    <View>
      <Button title="Get Sample Book" onPress={getSampleBookDataHandler} />
      <Text>{bookName}</Text>
    </View>
  );
};

export default BookComponent;
