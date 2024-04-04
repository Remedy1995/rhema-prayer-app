import { Pressable, StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native";
import { Colors } from "../Utils/Colors";
import { Button } from "./Button";
import { Dimensions } from "react-native";
import { PlayButton } from "./PlayButton";
import { StopButton } from "./StopButton";
const { width } = Dimensions.get('screen');
export const AudioControlButtons = ({ Play,Stop }) => {
    return (

        <View style={styles.container}>
            <PlayButton text={'Play'} Submit={Play}
                style={{ top: width <= 360 ? 0 : -10, backgroundColor: 'brown', width: width * 0.3 }} />
            <StopButton text={'Stop'} Submit={Stop}
                style={{ top: width <= 360 ? 0 : -10, backgroundColor: 'brown', width: width * 0.3 }} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignContent: 'center'
    },
    loginButton: {
        backgroundColor: Colors.primaryColor100,
        width: 298,
        paddingVertical: 13,
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
        fontSize: 16
    },
    buttonPressed: {
        opacity: 0.5
    }
})