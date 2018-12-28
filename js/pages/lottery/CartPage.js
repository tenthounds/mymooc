import React, { Component } from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView,TouchableWithoutFeedback } from 'react-native'

import SafeAreaViewPlus from '../../components/SafeAreaViewPlus'
import NavigationBar from '../../components/NavigationBar'
import THEME from '../../style/Theme';
import ViewUtils from '../../util/ViewUtil'

export default class CartPage extends Component {
  constructor(props){
    super(props);
    this.state={
     
    }
  }
  // 回退
  onBack() {
    this.props.navigation.pop();
  }
  // 截止
  _renderCutOffPanel() {
    return (
      <View style={styles.playContainer}>
        <Text>距0023期截止：09:23</Text>
      </View>
    )
  }
  render() {
    return (
      <SafeAreaViewPlus 
        topInset={false}
        // bottomInset={false}
      >
        <NavigationBar
          leftButton={ViewUtils.getLeftButton(()=>this.onBack())}
          popEnabled={false}
          title={'购彩蓝'}
        />
        {/* 截止栏 */}
        {this._renderCutOffPanel()}
        <Text>12312</Text>
      </SafeAreaViewPlus>
    )
  }
}

const styles = StyleSheet.create({

})