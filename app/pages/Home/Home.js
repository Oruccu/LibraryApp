import { SafeAreaView, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from './HomeStyles'
import CreateButton from '@/app/components/HomeScreen/CreateButton'
import BookModal from '@/app/components/Modals/BookModal'
import AuthorModal from '@/app/components/Modals/AuthorModal'

export default function Home() {
    const [modalBook, setModalBook] = useState(false)
    const [modalAuthor, setModalAuthor] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text>Carusel</Text>
            </View>
            <View style={styles.graphicContainer}>
                <Text>Grafig</Text>
            </View>
            <View style={styles.buttonCardContainer}>
                <CreateButton 
                    onPress={() => setModalBook(true)} 
                    buttonName={"Create Book"} 
                    theme={'Primary'}
                />
                <CreateButton 
                    onPress={() => setModalAuthor(true)} 
                    buttonName={"Create Author"} 
                    theme={'Secondary'}
                />
            </View>

            {/* Modal */}
            <BookModal 
                visible={modalBook} 
                onClose={() => setModalBook(false)} 
            />
            <AuthorModal 
                visible={modalAuthor} 
                onClose={() => setModalAuthor(false)} 
            />
        </View>
    )
}
