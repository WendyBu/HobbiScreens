import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'
import firebase from 'react-native-firebase'
// import { f, auth, database, storage } from '../config/config';

const hobbies = [' ', 'Badminton', 'Basketball', 'Bowling', 'Chess', 'Football', 'Fishing', 'Kayaking', 'Rock Climbing', 'Skiing', 'Snowboarding', 'Soccer', 'Tennis']

const renderLabel = (label, style) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{marginLeft: 10}}>
        <Text style={style}>{label}</Text>
      </View>
    </View>
  )
}

export default class SelectHobbies extends React.Component {
  state = { selectedHobbies: [] }


  writeUserData = () => {

    const uid = firebase.auth().currentUser.uid;
    const { selectedHobbies} = this.state

    firebase.database().ref(`Users/${uid}`).set(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    // check on previous state, how to keep the previous state???
    // only write when it's different with the new state
    this.writeUserData();
  }

  handleSignUp = () => {
    var state = this.state
    this.props.navigation.navigate('Profile')
  }

  onSelectionsChange = (selectedHobbies) => {
    // selectedHobbies is array of { label, value }
    this.setState({ selectedHobbies })
  }

  render () {
    return (
      <View style = {styles.style}>
        <SelectMultiple
          style = {styles.style}
          items={hobbies}
          renderLabel={renderLabel}
          selectedItems={this.state.selectedHobbies}
          onSelectionsChange={this.onSelectionsChange} />

          <Button title="Submit" onPress={this.handleSignUp} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  style: {
    backgroundColor: 'white'
  }
})
