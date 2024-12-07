import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 

    },
    text: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#333', 
    },
    innerContainer:{
        width: '100%', 
        flex:1
    },
    tabcontainer:{
        flex:1,
        justifyContent:'center'
    }
});

export default styles;