import * as React from 'react'
import * as WebBrowser from 'expo-web-browser'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import images from '../assets/images/images'

export default function Album({name, release, cover, spotifyLink}) {
  const styles = StyleSheet.create({
    coverImage:{
      width: 80,
      height: 80,
      resizeMode: 'contain'
    },
    container: {
      height: 100,
      width: '95%',
      marginBottom: 8,
      padding: 4,
      display: 'flex',
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#FCFCFC'
    },
    textContainer: {
      width: 160,
      // flex: 1
    }
  })

  function handlePress() {
    WebBrowser.openBrowserAsync(
      spotifyLink
    );
  }

  return(
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Image source={images[cover]} style={styles.coverImage} />
        <View style={styles.textContainer}>
          <Text style={{fontWeight: 'bold'}}>{name}</Text>
          <Text>{release}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}