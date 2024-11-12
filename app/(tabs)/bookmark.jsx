// Bookmark.js

import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

const bookmarksData = [
    { id: '1', title: 'Bookmark 1', description: 'Businesses' },
    { id: '2', title: 'Bookmark 2', description: 'Recommendations' },
    { id: '3', title: 'Bookmark 3', description: 'News' },
];

const Bookmark = () => {
    const renderItem = ({ item }) => (
        <View className ='p-4 border-b border-gray-300'>
            <Text className ='text-lg font-bold'>{item.title}</Text>
            <Text className ='text-gray-600'>{item.description}</Text>
        </View>
    );

    return (
        <View className = 'flex-1 p-4'>
            <Text className ='text-2xl font-bold mb-4'>Bookmarks</Text>
            <FlatList
                data={bookmarksData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default Bookmark;
