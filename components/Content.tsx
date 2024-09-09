import { View, Text, SafeAreaView } from 'react-native'
import React, { Children } from 'react'

const Content = ({children}:any) => {
  return <SafeAreaView className=' flex-1 px-5 py-3'>{children}</SafeAreaView>
}

export default Content