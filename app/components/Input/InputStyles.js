import { StyleSheet, Dimensions, Platform } from "react-native";

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{
        margin:10,
        padding: Platform.OS == 'ios' ? 10 : 0,
        borderBottomWidth:1,
    }
});

export default styles;