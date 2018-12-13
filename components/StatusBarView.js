import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native'

export default class StatusBarView extends Component{
  render() {
    return (
      <StatusBar
        animated={false}
        hidden={false}
        networkActivityIndicatorVisible={true}
        showHideTransition={'fade'}
        backgroundColor={'#000'}
        // translucent={true}
        barStyle={'dark-content'}
      >
      </StatusBar>
    )
  }
}