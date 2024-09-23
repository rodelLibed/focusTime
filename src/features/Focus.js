import React, { useState } from 'react'
import { View, Text, StyleSheet } from "react-native"
import { colors } from "../utils/color"
import { TextInput } from "react-native-paper"
import { RoundedButton } from "../components/RoundedButton"

export const Focus = () => {
  const [subject, setSubject] = useState(null)

  return (
   <View style={styles.container}>
     <Text style={styles.text}>Focus Feature</Text>
     <Text style={styles.text}>{subject}</Text>
     <View style={styles.inputContainer}>
       
       <TextInput style={styles.textInput} onChangeText={setSubject} value={subject}  label="What would you like to focus on" />
       <View style={styles.button}>
       <RoundedButton  title="+" size={50} />
       </View>
     </View>
   </View>
  )
}

const styles = StyleSheet.create({
   container: {
     flex: 1
   },
   button: {
     justifyContent: "center"
   },
   textInput: {
     flex: 1,
     marginRight: 10
   },

   inputContainer: {
     justifyContent: "top",
     flexDirection: "row",
     padding: 25,
     
   },

  text : {
    color: colors.white
  }
})