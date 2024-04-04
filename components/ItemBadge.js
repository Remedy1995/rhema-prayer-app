import { View, StyleSheet, Text } from "react-native";

export const ItemBadge = ({children,style ,style1}) => {
    return(
    <View style={[styles.badgeContainer,style]}>
        <Text style={[styles.badgeText,style1]}>{children}</Text>
        </View>)
}

const styles = StyleSheet.create ({
    badgeContainer: {
        backgroundColor: 'white',
        bottom : 330,
        left : 10,
         borderRadius : 8,
         padding:7,
         maxWidth : 120,
       
    },
    badgeText: {
        fontSize: 15,
        fontWeight: '700',
        color: '#7F00FF',
       textAlign :'center'
    }
})