import React from "react"
import { View, StyleSheet} from "react-native"
import { RoundedButton } from "../components/RoundedButton"

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={75} onPress={() => onChangeTime(10)} title="10" />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} onPress={() => onChangeTime(15)} title="15" />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} onPress={() => onChangeTime(20)} title="20" />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
   timingButton: {
      flex: 1,
      alignItems: "center"
   }
})