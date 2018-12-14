/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native'

export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedTab: 'tab_popular'
    }
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Button
          title="Go to page1"
          onPress={() => {
            navigation.navigate('Page1')
          }}
        />
        <Button
          title="Go to page2"
          onPress={() => {
            navigation.navigate('Page2')
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
})
