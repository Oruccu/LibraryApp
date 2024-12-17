import colors from "@/app/styles/Color";
import { StyleSheet } from "react-native";
const BaseStyles = StyleSheet.create({
    container:{
        borderRadius:15,
        padding:20,
        margin:10,
    },
    buttonName:{
        fontSize:15,
        fontWeight:'bold',
        color:colors.offWhite,
    }
});



export default {
    Primary : StyleSheet.create({
        container:{
            backgroundColor:colors.orange,
            ...BaseStyles.container
        },
        buttonName:{

            ...BaseStyles.buttonName
        },
        
    }),
    Secondary: StyleSheet.create({
        container:{
            backgroundColor:colors.mintGreen,
            ...BaseStyles.container
        },
        buttonName:{
           
            ...BaseStyles.buttonName
        }
        
    })
}