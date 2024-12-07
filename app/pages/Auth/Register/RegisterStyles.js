import { StyleSheet } from "react-native";
import colors from "@/app/styles/Color";

const styles = StyleSheet.create({
    message: {
        marginLeft: 15,
        color: colors.darkRed,
    },
    container:{
        flex: 1, 
        padding: 16
    }
});

export default styles