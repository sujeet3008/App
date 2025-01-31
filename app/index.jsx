import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-web'
import React from 'react'
import "../global.css"

const index = () => {
  return (
    <SafeAreaView className="bg-red-600">
      <Text className="text-white">index</Text>
    </SafeAreaView>
  )
}

export default index