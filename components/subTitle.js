import { View, StyleSheet, Text } from "react-native";

export const SubTitle = ({ leftTitle, rightTitle, style, style1 }) => {
  return (
    <View style={[styles.homeCategories, style]}>
      <Text style={[styles.categoryText,style1]}>{leftTitle}</Text>
      <Text style={[styles.viewAllText,]}>{rightTitle}</Text>
    </View>)
}


const styles = StyleSheet.create({
  homeCategories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 12,
    top: 40,
    marginRight: 20
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllText: {
    fontSize: 18
  }
})