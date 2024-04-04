import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { Colors } from "../Utils/Colors";
import { Card } from "./Card";
import { PriceTag } from "./PriceTag";
import { ItemBadge } from "./ItemBadge";
export const ServicesItems = ({ item, style, listSpecificCategory }) => {
    return (
        <Pressable style={(pressed) => []} onPress={listSpecificCategory}>
            <Card style={styles.cardStyle}>
                <Image source={{ uri: item.url }} style={[styles.categoryItem]} />
                <Text style={styles.categoryName}>{item.category}</Text>
                <PriceTag>GHC450.00</PriceTag>
                <View style={styles.userContainer}>
                <Image source={{ uri: item.url }} style={styles.userImageStyle} />
                <Text style={styles.userStyleText}>Ama Rose</Text>
                <ItemBadge  style={styles.badgeStyle}>{item.category.toUpperCase()}</ItemBadge>
                </View>
            </Card>
        </Pressable>)
}

const styles = StyleSheet.create({
    cardStyle: {
        width: 300,
        backgroundColor: Colors.primaryColor300,
        maxHeight: 350
    },
    categoryItem: {
        width: 300,
        height: 200,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    categoryName: {
        top: 5,
        marginLeft: 10,
        fontSize: 18,
        padding: 15,
        fontWeight: 'bold'
    },
    userImageStyle : {
     width : 50,
     height : 50,
     borderRadius : 50,
    
    },
    userStyleText : {
       paddingLeft : 20,
       marginTop : 15,
       fontSize : 17
    },
    userContainer : {
        flexDirection : 'row',
        bottom : 30,
        left : 20
    },
    badgeStyle : {
        bottom :250,
     marginLeft : -170,
      height : 40
    }
})