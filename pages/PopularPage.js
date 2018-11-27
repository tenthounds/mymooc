import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native'

export default class PopularPage extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          PopularPage
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
})
