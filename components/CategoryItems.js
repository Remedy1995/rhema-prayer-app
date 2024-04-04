import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../Utils/Colors";
import { Card } from "./Card";
export const CategoryItems = ({ item, id, style, cardStyle }) => {

    console.log('The id chosen is',id)
    const navigation = useNavigation();
    const navigateToAudioPage = () => {
        navigation.navigate('Audio Page', {
            data_id: id
        });

    }
    return (

        <Pressable  style={({ pressed }) => [pressed ? styles.buttonPress : null]} onPress={navigateToAudioPage}>
            <Card style={cardStyle}>
                <Image source={{ uri: item.url }} style={[styles.categoryItem, style]} />
                <Text style={styles.categoryName}>{item.category}</Text>
            </Card>
        </Pressable>)

}

const styles = StyleSheet.create({
    categoryItem: {
        width: 120,
        height: 100,
        top: 10,
        marginLeft: 15,
        borderRadius: 20
    },
    categoryName: {
        top: 5,
        textAlign: 'center',
        fontSize: 18,
        padding: 15,
        color: 'brown'
    },
    buttonPress: {
        opacity: 0.5
    }
})