import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function MembersScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <FlatList 
          data={membersList}
          renderItem={({item})=>(
          <Text style={styles.textStyles}>Name: {item.name} || {item.yob} </Text>
          )}
        />
      </ScrollView>
    </View>
  );
}

MembersScreen.navigationOptions = {
  header: null,
};

const membersList = [
  {
    name: 'Kim Hongjoong',
    yob: 1998
  },
  {
    name: 'Park Seonghwa',
    yob: 1998
  },
  {
    name: 'Jeong Yunho',
    yob: 1999
  },
  {
    name: 'Kang Yeosang',
    yob: 1999
  },
  {
    name: 'Choi San',
    yob: 1999
  },
  {
    name: 'Song Mingi',
    yob: 1999
  },
  {
    name: 'Jung Wooyoung',
    yob: 1999
  },
  {
    name: 'Choi Jongho',
    yob: 2000
  }
]


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  textStyles: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  }
});
