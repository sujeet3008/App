import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Sujeet </Text>
      <Text>Welcome to programming world world</Text>
      
    </View>
  )
}

export default App



const styles = StyleSheet.create({
  container :{
    display:"flex",
    flex:1,
    alignItems: "center",
    justifyContent :"center"
  },
});
