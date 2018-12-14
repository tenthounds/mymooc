import React, { Component } from 'react'
import { StyleSheet, Text, View, Navigator } from 'react-native'
import App from '../App';
export default class WelcomePage extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    setTimeout(()=>{
      this.timer=this.props.navigator.resetTo({
        component: App
      })
    }, 2000)
  }
  componentWillUnMount() {
    this.timer&&clearTimeout(this.timer);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          欢迎页面
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue'
  }
})
