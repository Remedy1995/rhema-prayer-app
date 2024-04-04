import { View, StyleSheet, Text } from "react-native";

export const PriceTag = ({children}) => {
    return(
    <View style={styles.priceTagContainer}>
        <Text style={styles.priceTagText}>{children}</Text>
        </View>)
}

const styles = StyleSheet.create ({
    priceTagContainer: {
        backgroundColor: '#7F00FF',
        width: 120,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation : 20,
        borderColor : 'white',
        borderWidth : 3,
        bottom : 78,
        left : 170
    },
    priceTagText: {
        fontSize: 18,
        padding: 8,
        fontWeight: '700',
        color: 'white'
    }
})