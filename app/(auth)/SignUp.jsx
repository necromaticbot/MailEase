import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../assets/constants'
import FormField from '../Components/FormField'
import CustomButton from '../Components/CustomButton'
import { Link, router } from 'expo-router'

const SignUp = () => {
  const [form, setForm]=useState({
    username:'',
    email: '',
    password:''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () =>{}
  return (
    <SafeAreaView className="bg-blue-950 h-full">
      <ScrollView>
          <View className="w-full justify-center items-center h-full px-4 my-1">
              <Image source={images.logo}
                resizemode='contain'
                className="w-[200px] h-[30px] "
              />
              <Text className="text-2xl text-white mt-5 font-u_regular ">Sign up to MailEase</Text>
              <FormField
                  title="Username"
                  value={form.username}
                  handleChangeText={(e) => setForm({ ...form, username: e })}
                  otherStyles="mt-5"
              />
<FormField
                  title="Email"
                  value={form.email}
                  handleChangeText={(e) => setForm({ ...form, email: e })}
                  otherStyles="mt-5"
                  keyboardType="email-address"
              />
              <FormField
                  title="Password"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  otherStyles="mt-5"
              />
              <CustomButton
                  title="Sign In"
                  handlePress={()=> router.push('/SignIn')}
                  containerStyles="w-full mt-7"
              />
        <View className="flex justify-center pt-5 flex-row      gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>  
            <Link
              href="/SignIn"
              className="text-lg font-u_bold text-orange-600 "
            >
              SignIn
            </Link>
          </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}
export default SignUp
