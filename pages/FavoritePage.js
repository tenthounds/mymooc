import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native'

export default class FavoritePage extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          FavoritePage
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  }
})
