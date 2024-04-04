import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native";
import { Colors } from "../Utils/Colors";
export const Card = ({  style, children }) => {
    return (
            <View style={[styles.categoryItemContainer, style]}>
                {children}
            </View>
    )
}


const styles = StyleSheet.create({
    categoryItemContainer: {
       // flex: 1,
        width: 150,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 50,
      
    },
    pressed: {
        opacity: 0.5,
        flex: 1
    }
})
