import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';

const NewMessageForm = ({onSend}) => {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (onSend) {
      onSend(inputText);
    }
    setInputText('');
  };

  return (
    <View>
      <TextInput
        value={inputText}
        testID="messageText"
        onChangeText={setInputText}
      />
      <Button title="Send" testID="sendButton" onPress={handleSend} />
    </View>
  );
};

export default NewMessageForm;
