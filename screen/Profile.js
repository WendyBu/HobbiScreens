import React from 'react'
import { StyleSheet, Button, ScrollView, Platform, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, SafeAreaView, Font} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import { f, auth, database, storage } from '../config/config';

export default class HomePage extends React.Component {
  state =  {  name: '', age: 0, location: '', aboutMe: '', funFact: ''}

  componentDidMount() {

    const uid = firebase.auth().currentUser.uid;
    let itemsRef = firebase.database().ref(`/Users/${uid}/info`);

    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let userName = data.name;
      let userAge = data.age;
      let userLocation = data.location;
      let userMe = data.aboutMe;
      let userFun = data.funFact;
      // let items = Object.values(data);
      this.setState({ name:userName, age:userAge, location:userLocation, aboutMe:userMe, funFact:userFun  });
    })
  }


  render() {
    return (
      <ScrollView
        style={styles.container}>

        <Image source = {require('../assets/profile_picture_example2.png')}
          style = {styles.profilePicture} />

        <Text style = {styles.profileBioHeader}>
          {this.state.name},{this.state.age} {"\n"}
          {this.state.location} {"\n"}
          About me: {this.state.aboutMe} {"\n"}
          Fun Fact: {this.state.funFact}
        </Text>

        <TouchableHighlight
         style={styles.settingButton}
         onPress={() => this.props.navigation.navigate('Main')}>
         <Image source = {require('../assets/logout.png')}
          style = {styles.settingButtonIcon} />
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.arrowButton}
         onPress={() => this.props.navigation.navigate('HomePage')}>
         <Icon name="chevron-right"  size={30} color = 'gray' style = {styles.arrowButtonIcon}>
        </Icon>
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.editInfo}
         onPress={() => this.props.navigation.navigate('ChangeInfo')}>
         <Icon name="edit"  size={30} color = 'gray' style = {styles.editInfoIcon}>
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
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 175.5,
    borderColor: 'black',
    left: 79,
    top: 190,
    borderWidth: 1
  },
  settingButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 15,
    top: 30,
    backgroundColor: '#ECECEC'
  },
  editInfo: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 88,
    top: 481,
    backgroundColor: '#ECECEC'
  },
  editInfoIcon: {
    position: 'absolute',
    left: 15,
    top: 15,
    backgroundColor: '#ECECEC'
  },
  settingButtonIcon: {
    position: 'absolute',
    width: 30,
    height: 30,
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
  arrowButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 312,
    top: 30,
    backgroundColor: '#ECECEC'
  },
  arrowButtonIcon: {
    position: 'absolute',
    left: 15,
    top: 15,
    backgroundColor: '#ECECEC'
  }
});
