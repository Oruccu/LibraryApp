import { Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'

export default function Home() {
    const [text, setText] = React.useState('');
    return (
        <View>
            <Text>Home</Text>
            <Button onPress={() => console.log("Hello")} title={"Bas"} theme={'Primary'}/>
            <Button onPress={() => console.log("Hello")} title={"Bas"} theme={'Secondary'}/>
            <Input
                placeholder={'şifre'}
                onChangeText={setText}
                value={text}
            />
        </View>
    )
}
