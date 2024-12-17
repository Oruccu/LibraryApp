import { SafeAreaView, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from './HomeStyles'
import CreateButton from '@/app/components/HomeScreen/CreateButton'
export default function Home() {
const CreateBook = () =>{

}
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
               <Text>Carusel</Text>
            </View>
            <View style={styles.graphicContainer}>
                <Text>Grafig</Text> 
            </View>
            <View style={styles.buttonCardContainer}>
                <CreateButton onPress={CreateBook} buttonName={"Create Book"}/>
            </View>
        </View>
    )
}
//react native expo graphic (Chart Kit)
/* https://www.npmjs.com/package/react-native-chart-kit*/



/*
Kitabın: 
*/
