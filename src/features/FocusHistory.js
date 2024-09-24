import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import { colors } from "../utils/color"
import { fontSizes, spacing } from "../utils/sizes"

export const FocusHistory = ({history}) => {

 if(!history || !history.length) return <Text style={styles.title}>We haven't focused anything yet!</Text>;

 const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things to focused on: </Text>
      <FlatList 
       data={history}
       renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md
  },
  item: {
     fontSize: fontSizes.md,
     color: colors.white,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: "bold"
  }
})