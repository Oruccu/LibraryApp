import { View, Image } from 'react-native'
import React from 'react'
import styles from './ImageCardStyles';
const ImageCard = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/icont.png')} style={styles.image}/>
    </View>
  )
}

export default ImageCard