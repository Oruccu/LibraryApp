import { StyleSheet, Dimensions , Platform } from "react-native";

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width
export default StyleSheet.create({
    container:{
        justifyContent:'flex-start',
        alignItems:'center',
    },
    image:{
        height: Platform.OS === 'ios' ? Height / 3 : Height / 4,
        width: Platform.OS === 'ios' ? 300 : 200, 

    }
})