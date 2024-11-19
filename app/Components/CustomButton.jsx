// components/CustomButton.jsx
import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'

const CustomButton = ({ title, handlePress, containerStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[{ backgroundColor: '#FF6A00', paddingVertical: 12, borderRadius: 8 }, containerStyles]}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, fontWeight: '600' }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default CustomButton
