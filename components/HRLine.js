import { View ,Text,StyleSheet} from "react-native";
import { Colors } from "../Utils/Colors";
export const HRLine = ({style})=>{
 return ( <View style={[styles.hrStyle,style]}></View>)
}



const styles = StyleSheet.create({
hrStyle : 
{ borderBottomWidth: 1,
    borderColor: Colors.primaryColor300,
    zIndex:1 ,
    width : 30 ,
    left : 400 ,
    paddingHorizontal : 160
}
})