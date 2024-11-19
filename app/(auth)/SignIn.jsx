import { View, Text, Image, ScrollView } from 'react-native'
import Reach from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'

const SignIn = () => {
  return (
    <SafeAreaView className="bg-blue-950" h-full">
     <ScrollView>
        <View className="w-full justify-center items-center
        h-full px-4 my-6">
          <Image source={images.logo}
            resizemode='contain'
            className="w-[300px] h-[50px] "
          />
          <Text className="text-2x1 text-white mt-10
          font-u_regular ">Log in to MailEase</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default SignIn