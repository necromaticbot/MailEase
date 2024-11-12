// Drafts.js

import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

const draftsData = [
    { id: '1', to: 'example1@mail.com', subject: 'Draft 1', body: 'This is the body of draft 1.' },
    { id: '2', to: 'example2@mail.com', subject: 'Draft 2', body: 'This is the body of draft 2.' },
    { id: '3', to: 'example3@mail.com', subject: 'Draft 3', body: 'This is the body of draft 3.' },
];

const Drafts = () => {
    const renderItem = ({ item }) => (
        <View className ='p-4 border-b border-gray-300'>
            <Text className ='text-lg font-bold'>{item.subject}</Text>
            <Text className ='text-gray-600'>To: {item.to}</Text>
            <Text className ='text-gray-500'>{item.body}</Text>
        </View>
    );

    return (
        <View className = 'flex-1 p-4'>
            <Text className ='text-2xl font-bold mb-4'>Drafts</Text>
            <FlatList
                data={draftsData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default Drafts;
