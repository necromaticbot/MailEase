// Create.js
import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const Create = ({ addDraft }) => {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSaveDraft = () => {
        if (to || subject || body) {
            addDraft({ to, subject, body });
            setTo('');
            setSubject('');
            setBody('');
        }
    };

    return (
        <View className ='flex-1 p-4'>
            <Text className = 'font-bold mb-2'>To:</Text>
            <TextInput
                className ='h-10 border border-gray-400 mb-3 p-2 rounded'
                placeholder="Recipient Email"
                value={to}
                onChangeText={setTo}
            />
            <Text className ='font-bold mb-2'>Subject:</Text>
            <TextInput
                className = 'h-10 border border-gray-400 mb-3 p-2 rounded'
                placeholder="Email Subject"
                value={subject}
                onChangeText={setSubject}
            />
            <Text className = 'font-bold mb-2'>Body:</Text>
            <TextInput
                className ='border border-gray-400 mb-3 p-2 rounded h-24'
                placeholder="Email Body"
                value={body}
                onChangeText={setBody}
                multiline
            />
            <Button title="Save to Drafts" onPress={handleSaveDraft} />
        </View>
    );
};

export default Create;
