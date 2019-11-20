import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import firebase from 'react-native-firebase'
// import { f, auth, database, storage } from '../config/config';

export default class SignUpInfo extends React.Component {
  state = { errorMessage: null, name: '', age: '', location: '', funFact: '', spiritAnimal: '', aboutMe: ''}

    writeUserData = () => {
        const uid = firebase.auth().currentUser.uid;
        const { errorMessage, name, age, location, funFact, spiritAnimal, aboutMe} = this.state

        firebase.database().ref(`Users/${uid}/info`).set(this.state);
    }

    componentDidUpdate(prevProps, prevState) {
        // only write when it's different with the new state
        this.writeUserData();
    }


  handleSignUp = () => {
    const { name, age, location, funFact, spiritAnimal, aboutMe, hobbies} = this.state
    this.props.navigation.navigate('Profile')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rectangle}>
        </View>
        <View style={styles.getStartedContainer}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SelectHobbiesSignUp')}>
          <Text style={styles.getStartedText}>
            Hobbi
          </Text>
        </TouchableOpacity>
        </View>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          secureTextEntry
          placeholder="   Name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <TextInput
          placeholder="   Age"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={age => this.setState({ age })}
          value={this.state.age}
        />
        <TextInput
          placeholder="   Location"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={location => this.setState({ location })}
          value={this.state.location}
        />
        <TextInput
          placeholder="   Fun Fact"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={funFact => this.setState({ funFact })}
          value={this.state.funFact}
        />
        <TextInput
          placeholder="   Spirit Animal"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={spiritAnimal => this.setState({ spiritAnimal })}
          value={this.state.spiritAnimal}
        />
        <TextInput
          placeholder="   About Me"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={aboutMe => this.setState({ aboutMe })}
          value={this.state.aboutMe}
          multiline={true}
          numberOfLines={5}
        />

        <Button style = {styles.buttonStyle} title="Submit" onPress={this.handleSignUp} />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DFB662'
  },
  buttonStyle: {
    top: 630
  },
  rectangle: {
    position: 'absolute',
    width: 208,
    height: 60,
    left: 85,
    top: 215,

    backgroundColor: '#DFB662',
    borderWidth: 3, //solid #FFFBFB,
    borderColor: "white",
    borderRadius: 34.5
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    backgroundColor: 'white'
  },
  getStartedContainer: {
    alignItems: 'center',
  },
  getStartedText: {
    fontFamily: "MontserratAlternates-ExtraBold",
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  }
})
