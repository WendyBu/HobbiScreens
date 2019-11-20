import React from 'react'
import { StyleSheet, Button, ScrollView, Platform, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, SafeAreaView, Font} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import firebase from 'react-native-firebase'

export default class Chat extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}>

        <Icon name="user"  size={60} color = '#EBB448' style = {styles.profileButtonIcon}>
        </Icon>

        <Image source = {require('../assets/profile_picture_example2.png')}
          style = {styles.profilePicture} />


        <TouchableHighlight
         style={styles.profileButton}
         onPress={() => this.props.navigation.navigate('HomePage')}>
         <Icon name="chevron-left"  size={30} color = 'gray' style = {styles.profileButtonIcon}>
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
  logo: {
    position: 'absolute',
    left: 158,
    top: 35,
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
  profileButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 15,
    top: 15,
    backgroundColor: '#ECECEC'
  },
  profileButtonIcon: {
    position: 'absolute',
    left: 15,
    top: 15,
    backgroundColor: '#ECECEC'
  },
  profileBioHeader: {
    position: 'absolute',
    width: 352,
    height: 232,
    left: 12,
    top: 404,

    fontFamily: 'Montserrat-Black',
    fontSize: 25,
    lineHeight: 35,
    textAlign: 'center'
  },
  profileBio: {
    position: 'absolute',
    width: 352,
    height: 232,
    left: 12,
    top: 404,

    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    lineHeight: 35,
    textAlign: 'center'
  },
  rectangle: {
    height: 493,
    width: 357,
    backgroundColor: '#EBB448',
    opacity: 0.3,
    position: 'absolute',
    top: 163,
    left: 9
  },
  xButton: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 43,
    top: 676,
  }
});
