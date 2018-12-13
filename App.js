/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image } from 'react-native'
import { AppNavigators } from './navigators/AppNavigators'

export default class App extends React.Component {
  // 第一种写法
  render() {
    return (
      <View style={{flex: 1}}>
          <AppNavigators/>
      </View>
    )
  }
}
