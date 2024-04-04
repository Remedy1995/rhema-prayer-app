import { Pressable, StyleSheet, Text } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Colors } from "../Utils/Colors";


export const StopButton = ({ Submit, style, text, styles1, isSubmitting }) => {
    return (
        <Pressable style={({ pressed }) => [styles.loginButton, pressed && styles.buttonPressed, style]} onPress={Submit} >
          <Entypo name="controller-stop" size={20} color="white" style={{textAlign :'center'}} />
          <Text style={[styles.loginText, styles1]}>{text}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    loginButton: {
        flexDirection :'row',
        backgroundColor: Colors.primaryColor100,
        width: 298,
        padding: 13,
        marginTop: 20,
        borderRadius: 5,
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#C0C0C0',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        top: 5
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        left : 10
    },
    buttonPressed: {
        opacity: 0.5
    }
})