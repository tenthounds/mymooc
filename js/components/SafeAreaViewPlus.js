import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, View, ViewPropTypes} from 'react-native';
import {PropTypes} from 'prop-types';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'
import LinearGradient from 'react-native-linear-gradient'

import THEME from '../style/Theme'

export default class SafeAreaViewPlus extends Component {
    static propTypes = {
        ...ViewPropTypes,
        topColor: PropTypes.string,
        bottomColor: PropTypes.string,
        enablePlus: PropTypes.bool,
        topInset: PropTypes.bool,
        bottomInset: PropTypes.bool
    };

    static defaultProps = {
        topColor: THEME.navBgColor,
        bottomColor: THEME.containerBgColor,
        enablePlus: true,
        topInset: false,
        bottomInset: true
    };
    
    getTopArea(topColor, topInset) {
        return !isIphoneX || topInset ? null
            : <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={THEME.linearGradientColor} style={styles.topArea}>
                {/* <View style={[styles.topArea, {backgroundColor: topColor}]}/> */}
              </LinearGradient>
    }

    getBottomArea(bottomColor, bottomInset) {
        return !isIphoneX || bottomInset ? null
            : <View style={[styles.bottomArea, {backgroundColor: bottomColor}]}/>
    }

    genSafeAreaViewPlus() {
        const {children, topColor, bottomColor, topInset, bottomInset} = this.props;
        return <View style={[styles.container, this.props.style]}>
            {this.getTopArea(topColor, topInset)}
            {children}
            {this.getBottomArea(bottomColor, bottomInset)}
        </View>
    }

    genSafeAreaView() {
        return <SafeAreaView style={[styles.container, this.props.style]} {...this.props}>
            {this.props.children}
        </SafeAreaView>
    }

    render() {
        const {enablePlus} = this.props;
        return enablePlus ? this.genSafeAreaViewPlus() : this.genSafeAreaView();
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topArea: {
        height: 44,
    },
    bottomArea: {
        height: 34,
    },
});