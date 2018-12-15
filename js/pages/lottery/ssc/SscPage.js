/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native'
import SafeAreaViewPlus from '../../../components/SafeAreaViewPlus'
import NavigationBar from '../../../components/NavigationBar'
import theme from '../../../components/theme';
import ViewUtils from '../../../util/ViewUtil'

const THEME = theme
export default class SscPage extends Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  // 回退
  onBack() {
    this.props.navigation.pop();
  }
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaViewPlus 
        style={styles.container}
        topInset={false}
        topColor={theme.navBgColor}
      >
        <NavigationBar
          leftButton={ViewUtils.getLeftButton(()=>this.onBack())}
          popEnabled={false}
          title={'时时彩'}
          // rightButton={this.renderRightButton()}
        />
      </SafeAreaViewPlus>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.containerBgColor
  }
})
