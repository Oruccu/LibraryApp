import { StyleSheet } from "react-native";
import Colors from '../../styles/Color'
const BaseStyles = StyleSheet.create({
    container: { 
        paddingVertical: 12,                   
        borderRadius: 20,              
        alignItems: 'center',         
        justifyContent: 'center',    
        marginRight:40,
        marginTop:20,
        marginLeft:40       
    },
    title:{
        fontSize:20,
    }
})
export default {
    Primary: StyleSheet.create({
        container:{
            ...BaseStyles.container,
            backgroundColor:Colors.green,
        },
        title:{
            ...BaseStyles.title,
            color:Colors.offWhite,
        }
    }),
    Secondary: StyleSheet.create({
        container:{
            ...BaseStyles.container,
            borderColor:Colors.green,
            borderWidth:1
        },
        title:{
            ...BaseStyles.title,
            color:Colors.green,
        }
    }),
    Third: StyleSheet.create({
        container:{
            ...BaseStyles.container,
            backgroundColor:Colors.orange,

        },
        title:{
            ...BaseStyles.title,
            color:Colors.offWhite,
        }
    }),

}