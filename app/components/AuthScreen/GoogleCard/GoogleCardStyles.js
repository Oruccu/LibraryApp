import { StyleSheet } from "react-native";
import colors from "@/app/styles/Color";
const styles = StyleSheet.create({
    container:{
        marginRight:40,
        marginTop:20,
        marginLeft:40, 
        padding:10,
        borderRadius:20,
        flexDirection:'row',
        borderWidth:1,
        alignItems:'center',
        borderColor:colors.green,
        justifyContent:'center'

    },
    icon:{
        marginRight:20,
    },
    text:{
        color:colors.gray  
    }
    
});

export default styles;