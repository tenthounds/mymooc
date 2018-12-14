import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ViewPropTypes,
  SafeAreaView
} from 'react-native'
import DeviceInfo from 'react-native-device-info'
import {PropTypes} from 'prop-types'

export default class SafeAreaViewPlus extends Component {
  static propTypes = {
    ...ViewPropTypes,
    topColor: PropTypes.string,
    bottomColor: PropTypes.string,
    enablePlus: PropTypes.bool,
    topInset: PropTypes.bool,
    bottomInset: PropTypes.bool
  }
  static defaultProps = {
    topColor: 'transparent',
    bottomColor:'#f8f8f8',
    enablePlus: true,
    topInset: false,
    bottomInset: true
  }
  _genSafeAreaView() {
    return <SafeAreaView style={[styles.container, this.props.style]} {...this.props}>
        {this.props.children}
      </SafeAreaView>
  }
  _getTopArea(topColor, topInset) {
    return !DeviceInfo.isIPhoneX_deprecated || topInset ? null
      :<View style={[styles.topArea, {backgroundColor: topColor}]}></View>
  }
  _getBottomArea(bottomColor, bottomInset) {
    return !DeviceInfo.isIPhoneX_deprecated || topInset ? null
      :<View style={[styles.bottomArea, {backgroundColor: bottomColor}]}></View>
  }
  _genSafeAreaViewPlus() {
    const {children, topColor, bottomColor, topInset, bottomInset} = this.props;
    return <View>
        {this._getTopArea(topColor, topInset)}
        {children}
        {this._getBottomArea(bottomColor, bottomInset)}
      </View>
  }
  render() {
    const { enablePlus } = this.props;
    return enablePlus ? this._genSafeAreaViewPlus() : this._genSafeAreaView();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topArea: {
    height: 44
  },
  bottomArea: {
    height: 34
  }
})