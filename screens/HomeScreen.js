import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Discography from '../components/Discography';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/ateezkq.jpeg')}
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>

          <Text style={styles.questionText}>What is ATEEZ?</Text>
          <Text style={styles.normalText}>
            Ateez, is an 8-member boy group from South Korea under the company KQ Entertainment. They debuted on October 24, 2018 with the songs ‘Treasure’ and ‘Pirate King’ of 'Treasure EP.1: All to Zero'.
          </Text>

          <Text style={styles.questionText}>What does ATEEZ mean?</Text>
          <Text style={styles.normalText}>
            ATEEZ is an acronym for "A TEEnager Z", It also stands for "A to Z" meaning everyone, they are a group of teenagers who are aiming to do everything they can enthusiastically.
          </Text>

          <Text style={styles.questionText}>What's the fandom name?</Text>
          <Text style={styles.normalText}>
            The official fandom name is Atiny, a contraction of 'ATEEZ' and 'destiny', and it was presented by the members on November 17, 2018 on VLive. However, it was officially established on November 22, 2019.
          </Text>

          <Text style={{...styles.questionText, marginBottom: 12}}>Discography</Text>
          <Discography />
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handlePress} style={styles.link}>
            <Text style={styles.linkText}>Official ATEEZ site</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function handlePress() {
  WebBrowser.openBrowserAsync(
    'http://ateez.kqent.com/'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 4,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  welcomeImage: {
    width: 280,
    height: 260,
    resizeMode: 'contain',
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 30,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 26,
    color: '#000',
    marginTop: 6,
    marginBottom: 4
  },
  normalText: {
    fontSize: 15,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 22,
    textAlign: 'left',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  link: {
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 16,
    color: '#2e78b7',
    fontStyle: 'italic',
    fontWeight: '500'
  },
});
