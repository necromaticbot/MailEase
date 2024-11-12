// Profile.js
import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const Profile = () => {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john.doe@example.com');

    const handleSave = () => {
        console.log("Profile saved:", { name, email });
    };

    return (
        <View className ='flex-1 p-4'>
            <Text className ='text-xl font-bold mb-4'>Profile</Text>
            <Text className ='font-bold mb-2'>Name:</Text>
            <TextInput
                className = 'h-10 border border-gray-400 mb-3 p-2 rounded'
                value={name}
                onChangeText={setName}
            />
            <Text className = 'font-bold mb-2'>Email:</Text>
            <TextInput
                className = 'h-10 border border-gray-400 mb-3 p-2 rounded'
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <Button title="Save Profile" onPress={handleSave} />
        </View>
    );
};

export default Profile;
