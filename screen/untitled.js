import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

export default class Profile extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <ActivityIndicator size="large" />
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
  }
})