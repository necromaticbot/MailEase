// Home.js
import { View, Text, Button } from 'react-native';
import React from 'react';

const Home = () => {
    const handleRefresh = () => {
        console.log("Content refreshed!");
    };

    return (
        <View className = 'flex-1 p-4 justify-center items-center'>
            <Text className = 'text-2xl font-bold mb-4'>Welcome to the Home Tab!</Text>
            <Text className ='text-gray-600 mb-4'>
                This is where you can find your latest updates and messages.
            </Text>
            <Button title="Refresh Content" onPress={handleRefresh} />
        </View>
    );
};

export default Home;
