import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { Colors } from "../Utils/Colors";
import { Card } from "./Card";
import { PriceTag } from "./PriceTag";
import { HRLine } from "./HRLine";
import { ItemBadge } from "./ItemBadge";
import { Feather } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export const BookingItems = ({ item, style, specificBookingPage }) => {
 const width  = Dimensions.get('window').width;
    return (
        <Pressable style={(pressed) => []} onPress={specificBookingPage}>

                 <View>
            <Card style={[styles.cardStyle, style]}>
                <Image source={{ uri: item.url }} style={[styles.bookingImage]} />
                <ItemBadge style={styles.status} style1={{ color: Colors.primaryColor300 }}>Pending</ItemBadge>
                <Feather name="edit" size={24} color={Colors.primaryColor100} style={styles.editStyle} />
                <Text style={styles.bookingId}>#2755</Text>
                <Text style={styles.BookingServiceName}>Ac Gas Refill</Text>
                <Text style={styles.BookingServiceAmount}>$37.80 <Text style={styles.discount}>(2% Off)</Text></Text>
            </Card>

            <View style={{  flex :1,bottom : 50 ,left:-5 }}>
            <View style={[styles.addInformation ,{...styles.addInformation , left : width > 360 ? 50 :25  }]}>
                <Text style={{flex : 1}}>Date & Time </Text>
                <Text style={{fontWeight: 'bold'}}>30 Jun, 2023 At 06:26 PM</Text>
            </View>
          
            <View style={[styles.addInformation1,{...styles.addInformation1 , left : width > 360 ? 50 :25 }]}>
                <Text style={{flex : 1}}>Payment Status</Text>
                <Text>Pending Approval</Text>
            </View>
            
            <View style={[styles.addInformation2,{...styles.addInformation2 , left : width > 360 ? 50 :25 }]}>
                <Text style={{flex : 1}}>Handyman</Text>
                <Text>Demo HandyMan</Text>
            </View>
            </View>
            </View>
        </Pressable>)
}

const styles = StyleSheet.create({
    cardStyle: {
        flexDirection: 'row',
        width: 355,
        backgroundColor: 'transparent',
        height :300,
        left: 16,
        borderColor: Colors.primaryColor300,
        borderWidth: 1,
        marginTop: -80,
        top :100,
    },
    bookingImage: {
        width: 120,
        height: 100,
        borderRadius: 10,
        marginTop: 20,
        left: 20
    },
    statusContainer: {
        top: 5,
        marginLeft: 10,
        fontSize: 18,
        padding: 15,
        fontWeight: 'bold'
    },
    userImageStyle: {
        width: 50,
        height: 50,
        borderRadius: 50,

    },
    userStyleText: {
        paddingLeft: 20,
        marginTop: 15,
        fontSize: 17
    },
    userContainer: {
        flexDirection: 'row',
        bottom: 30,
        left: 20
    },
    status: {
        height: 35,
        top: 30,
        marginLeft: 40,
        backgroundColor: '#DB7093',
        color: '#ED2939'
    },
    editStyle: {
        left: 40,
        top: 30
    },
    bookingId: {
        top: 30,
        left: 40,
        color: Colors.primaryColor100,
        fontWeight: 'bold'
    },
    BookingServiceName: {
        left: -125,
        top: 80,
        fontWeight: 'bold'
    },
    BookingServiceAmount: {
        left: -205,
        top: 105,
        fontWeight: 'bold',
        color: Colors.primaryColor100
    },
    discount: {
        color: 'green'
    },
    additionalInformation: {
        flexDirection: 'row'
    },
    addInformation: {
        backgroundColor: Colors.primaryColor200,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        width: 320, 
        left: 50,
        borderTopRightRadius : 5 ,
        borderTopLeftRadius : 5,
        padding: 10,
        flex : 1,
        paddingLeft : 20,
        paddingRight : 20
    },
    addInformation1: {
        flex : 1,
        backgroundColor: Colors.primaryColor200,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        width: 320, left: 50,
        padding: 10,
        paddingLeft : 20,
        paddingRight : 20,
    },
    addInformation2: {
        flex : 1,
        backgroundColor: Colors.primaryColor200,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        width: 320,
         left: 50,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 10,
        paddingLeft : 20,
        paddingRight : 20
    },
})