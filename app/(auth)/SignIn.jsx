import { View, Text, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../assets/constants';
import FormField from '../Components/FormField';
import CustomButton from '../Components/CustomButton';
import { Link, router} from 'expo-router';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    // Handle form submission (dummy submit function)
    if (!form.email || !form.password) {
      alert('Please fill out all fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate an API call with a delay
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Form submitted successfully!');
    }, 2000);
  };

  return (
    <SafeAreaView className="bg-blue-950 h-full ">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full justify-center items-center h-full px-4 mb-10">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[300px] h-[50px]"
          />
          <Text className="text-2xl text-white mt-10 font-u_regular">
            Log in to MailEase
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            secureTextEntry // Add this to make the password field hidden
          />

          <CustomButton
            title="Sign In"
            handlePress={()=> router.push('/home')}
            containerStyles="w-full mt-7"
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>

            <Link href="/SignIn" className="text-lg font-u_bold text-orange-600">
              SignUp
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
