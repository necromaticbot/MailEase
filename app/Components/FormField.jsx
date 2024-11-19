// components/FormField.jsx
import React from 'react'
import { TextInput, Text, View } from 'react-native'

const FormField = ({ title, value, handleChangeText, keyboardType, otherStyles }) => {
  return (
    <View className={`w-full ${otherStyles}`}>
      <Text className="text-white font-pregular text-lg">{title}</Text>
      <TextInput
        value={value}
        onChangeText={handleChangeText}
        keyboardType={keyboardType || 'default'}
        style={{
          borderWidth: 1,
          borderColor: '#FF6A00',
          borderRadius: 8,
          paddingVertical: 12,
          paddingHorizontal: 16,
          marginTop: 8,
          fontSize: 16,
          color: '#fff',
        }}
      />
    </View>
  )
}

export default FormField
