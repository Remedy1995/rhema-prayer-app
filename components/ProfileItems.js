import { Text, View, Pressable, StyleSheet, Modal, ScrollView, KeyboardAvoidingView } from "react-native";
import { Colors } from "../Utils/Colors";
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardWrapper } from "./KeyboardWrapper";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import CustomModal from "./CustomModal";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CustomTextInput } from "./CustomTextInput";
import CustomTextInputLabel from "./CustomTextInputLabel";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "./Button";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native";
import { Dimensions } from "react-native";
import { useEffect } from "react";
export const ProfileItems = ({ items, style, show, name }) => {
    const width = Dimensions.get('window').width;
    const navigation = useNavigation();



  

    const [modalOpen, setModalOpen] = useState(false);
    const clickMe = () => {
        setModalOpen(true)
        console.log('This has been clicked', items)
    }
    let showModalTypeScreen = (
        <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
                <View style={{ flex: 1 }} ><Text style={styles.modalHeadertext}>{items.toUpperCase()}</Text>
                </View>
                <View><AntDesign name='closesquare' style={{ paddingRight: 10 }} size={40} color={Colors.primaryColor000} onPress={() => setModalOpen(!modalOpen)} />
                </View>
            </View>
            <View style={{
                left: width > 360 ? 30 : 0,
                marginTop: width > 360 ? 20 : 0
            }}><CustomTextInput placeholder="Old Password" /></View>
        </View>
    )
    if (items === "Change Password") {
        showModalTypeScreen =
            
            <View style={[styles.modalContainer, { top : '48%', height: '87%'}]}>
                <View style={styles.modalHeader}>
                    <View style={{ flex: 1 }} ><Text style={styles.modalHeadertext}>{items.toUpperCase()}</Text>
                    </View>
                    <View><AntDesign name='closesquare' style={{ paddingRight: 33 }} size={30} color={Colors.primaryColor000} onPress={() => setModalOpen(!modalOpen)} />
                    </View>
                </View>
               
                    {/* <View style={{
                        left: width > 360 ? 30 : 0,
                        marginTop: width > 360 ? 20 : 0
                    }}> */}
                    <View style={{backgroundColor : 'white',flex : 1 ,marginLeft : 22}}>
                         <KeyboardAwareScrollView  extraHeight={140} enableOnAndroid>
                          
                        <CustomTextInputLabel>OLD PASSWORD</CustomTextInputLabel>
                        <CustomTextInput style={styles.customTextInputStyle} />
                        <CustomTextInputLabel>NEW PASSWORD</CustomTextInputLabel>
        
                            <CustomTextInput style={styles.customTextInputStyle} />
                
                        <Button text="CHANGE PASSWORD" styles1={{ top: -3 }} style={{ top: -2, left: 30, width: 280, borderRadius: 20, paddingVertical: 15 }} />
                        </KeyboardAwareScrollView>
                      
                        </View>
              
             </View>
         
    }

    if (items === "Edit Your Phone") {
        showModalTypeScreen =
            <View style={[styles.modalContainer, { top: '48%', height: '85%' , zIndex : 1 }]}>
                <View style={styles.modalHeader}>
                    <View style={{ flex: 1 }} ><Text style={styles.modalHeadertext}>{items.toUpperCase()}</Text>
                    </View>
                    <View><AntDesign name='closesquare' style={{ paddingRight: 33 }} size={30} color={Colors.primaryColor000} onPress={() => setModalOpen(!modalOpen)} />
                    </View>
                </View>
                        <CustomTextInputLabel>ENTER PHONE</CustomTextInputLabel>
                        <CustomTextInput style={styles.customTextInputStyle} />
                        <Button text="EDIT PHONE" styles1={{ top: -3 }} style={{ top: -2, left: 30, width: 280, borderRadius: 20, paddingVertical: 15 }} />
                    </View>
              
          
    }
    if (items === "Change Email Address") {
        showModalTypeScreen =
            <View style={[styles.modalContainer, { top: '60%', height: '95%' }]}>
                <View style={styles.modalHeader}>
                    <View style={{ flex: 1 }} ><Text style={styles.modalHeadertext}>{items.toUpperCase()}</Text>
                    </View>
                    <View><AntDesign name='closesquare' style={{ paddingRight: 33 }} size={30} color={Colors.primaryColor000} onPress={() => setModalOpen(!modalOpen)} />
                    </View>
                </View>
                <ScrollView>
                <View style={{
                        left: width > 360 ? 30 : 0,
                        marginTop: width > 360 ? 10 : 0
                    }}>
                        <CustomTextInputLabel>ENTER EMAIL ADDRESS</CustomTextInputLabel>
                        <CustomTextInput style={styles.customTextInputStyle} />
                        <Button text="CHANGE EMAIL ADDRESS" styles1={{ top: -3 }} style={{ top: -2, left: 30, width: 280, borderRadius: 20, paddingVertical: 15 }} />
                    </View>
                </ScrollView>
            </View>
    }
    return (
        <>
            <View>
                <CustomModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                    {showModalTypeScreen}
                </CustomModal>
            </View>
            <>
                <View>
                    <Pressable onPress={clickMe} style={({ pressed }) => pressed && { opacity: 0.5 }}>
                        <View style={[styles.ItemsContainer, style]}>
                            <View style={{ flex: 1 }}>
                                <MaterialIcons name={name} size={25} color={Colors.PrimaryColor500} />
                            </View>
                            <View style={{ flex: 1, marginLeft: -220 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{items}</Text>
                            </View>
                            <View style={{ flex: 1, marginRight: -240 }}>
                                {show && (<AntDesign name='right' size={25} color={Colors.PrimaryColor500} />)}
                            </View>
                        </View>
                    </Pressable>
                </View>
            </></>


    )
}

const styles = StyleSheet.create({
    ItemsContainer: {
        flexDirection: 'row',
        top: -30,
        marginLeft: 12,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingBottom: 12
    },
    modalContainer: {
        top: '60%',
        height: '70%',
        backgroundColor: Colors.primaryColor000,

    }
    ,
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: Colors.primaryColor100,
       
    },
    modalHeadertext: {
        marginLeft: 40,
        flex: 1,
        fontSize: 18,
        marginTop: 2,
        color: Colors.primaryColor000,
        fontWeight: 'bold'
    },
    customTextInputStyle: {
        width: 280,
        marginLeft: 30,
        // borderColor : Colors.primaryColor100 ,
        // borderWidth : 1,
        borderRadius: 5,
        paddingBottom: 2,
        paddingLeft: 10,
        top : -10
    }
})