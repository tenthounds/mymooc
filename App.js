/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image } from 'react-native'
import { AppStackNavigator } from './navigators/AppNavigators'

export default class App extends React.Component {
  // 第一种写法
  render() {
    return (
      <View style={{flex: 1}}>
          <AppStackNavigator/>
      </View>
    )
  }
  // render() {
  //   return(
  //     <View>
  //       <Text>
  //         2
  //       </Text>
  //     </View>
  //   )
  // }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  page1: {
    flex: 1,
    backgroundColor: 'red'
  },
  page2: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  image: {
    height: 22,
    width: 22
  }
})
