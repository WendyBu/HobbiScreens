import React from 'react'
import { StyleSheet, Button, ScrollView, Platform, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, SafeAreaView, Font} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Chat extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}>

        <Icon name="comments"  size={60} color = '#EBB448' style = {styles.chatPageLogo}>
        </Icon>

        <Image source = {require('../assets/profile_picture_example2.png')}
          style = {styles.profilePicture} />


        <TouchableHighlight
         style={styles.homepageButton}
         onPress={() => this.props.navigation.navigate('HomePage')}>
         <Icon name="chevron-left"  size={30} color = 'gray' style = {styles.homepageButtonIcon}>
        </Icon>
        </TouchableHighlight>
      </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC'
  },
  chatPageLogo: {
    position: 'absolute',
    left: 158,
    top: 45,
  },
  profilePicture: {
    width: 70,
    height: 70,
    borderRadius: 140,
    borderColor: 'black',
    left: 13,
    top: 139,
    borderWidth: 1
  },
  homepageButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 15,
    top: 30,
    backgroundColor: '#ECECEC'
  },
  homepageButtonIcon: {
    position: 'absolute',
    left: 15,
    top: 15,
    backgroundColor: '#ECECEC'
  }
});
