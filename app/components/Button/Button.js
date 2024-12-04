import React, { Component } from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import styles from './ButtonStyles';

export default function Button({onPress, title, theme})
{
    return (
        <TouchableOpacity onPress={onPress} style={styles[theme].container}>
            <Text style={styles[theme].title}> {title} </Text>
        </TouchableOpacity>
    );
}



