import React from 'react'
import { StyleSheet, Button, ScrollView, Platform, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, SafeAreaView, Font} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class HobbyPage extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}>

        <TouchableHighlight
         style={styles.logoButton}
         onPress={() => this.props.navigation.navigate('HomePage')}>
          <Image source = {require('../assets/Logo.png')}
            style = {styles.logo} />
        </TouchableHighlight>

        <Image source = {require('../assets/kayak.png')}
          style = {styles.kayak} />

        <Image source = {require('../assets/rock_climb.png')}
          style = {styles.rockClimb} />

        <Image source = {require('../assets/badminton.png')}
          style = {styles.badminton} />

        <Image source = {require('../assets/bowling.png')}
          style = {styles.bowling} />

        <Image source = {require('../assets/basketball.png')}
          style = {styles.basketball} />

        <Image source = {require('../assets/chess.png')}
          style = {styles.chess} />

        <TouchableHighlight
        style={styles.rectangleButton}
         onPress={() => this.props.navigation.navigate('HomePage')}>
        <View style={styles.rectangle}>
        </View>
        </TouchableHighlight>


        <TouchableHighlight
         style={styles.profileButton}
         onPress={() => this.props.navigation.navigate('Profile')}>
         <Icon name="user"  size={30} color = 'gray' style = {styles.profileButtonIcon}>
        </Icon>
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.chatButton}
         onPress={() => this.props.navigation.navigate('Chat')}>
         <Icon name="comments"  size={30} color = 'gray' style = {styles.chatButtonIcon}>
        </Icon>
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.checkButton}
         onPress={() => this.props.navigation.navigate('HomePage')}>
         <Icon name="check-circle"  size={100} color = 'green' style = {styles.checkButtonIcon}>
        </Icon>
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.xButton}
         onPress={() => this.props.navigation.navigate('HomePage')}>
         <Icon name="times-circle"  size={100} color = 'red' style = {styles.xButtonIcon}>
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
    width: 80,
    height: 66.85,
    position: 'absolute',
  },
  logoButton: {
    width: 80,
    height: 66.85,
    position: 'absolute',
    left: 148,
    top: 69,
  },
  profileButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 15,
    top: 30,
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
    left: 12,
    top: 200,

    fontFamily: 'Montserrat-Black',
    fontSize: 18,
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
  rectangleButton: {
    height: 493,
    width: 357,
    backgroundColor: '#EBB448',
    opacity: 0.3,
    position: 'absolute', 
    top: 163,
    left: 9
  },
  chatButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 312,
    top: 30,
    backgroundColor: '#ECECEC'
  },
  chatButtonIcon: {
    position: 'absolute',
    left: 15,
    top: 15,
    backgroundColor: '#ECECEC'
  },
  checkButton: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 233,
    top: 676,
    backgroundColor: '#ECECEC'
  },
  checkButtonIcon: {
    position: 'absolute',
    backgroundColor: '#ECECEC'
  },
  xButton: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 43,
    top: 676,
    backgroundColor: '#ECECEC'
  },
  xButtonIcon: {
    position: 'absolute',
    backgroundColor: '#ECECEC'
  },
  kayak: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 35,
    top: 204,
  },
  rockClimb: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 240,
    top: 204,
  },
  badminton: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 35,
    top: 363,
  },
  bowling: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 240,
    top: 363,
  },
  basketball: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 35,
    top: 522,
  },
  chess: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 240,
    top: 522,
  }
});
