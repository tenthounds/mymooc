/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, Button,TouchableOpacity,ScrollView,TouchableWithoutFeedback } from 'react-native'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

import SafeAreaViewPlus from '../../../components/SafeAreaViewPlus'
import NavigationBar from '../../../components/NavigationBar'
import THEME from '../../../style/Theme';
import ViewUtils from '../../../util/ViewUtil'
import WuXingZhiXuanFushi from '../../../components/ballsSection/ssc/wuxing/zhixuan/Fushi'
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
  //  截止栏
  _renderCutOffPanel() {
    return (
      <View style={styles.playContainer}>
        <Text>距0023期截止：09:23</Text>
        <TouchableOpacity>
          <View style={styles.playSelect}>
            <Text style={styles.playSelectText}>
              五星直选复式
            </Text>
            <Image 
              source={require('../../../../res/images/ic_select.png')}
              style={styles.playSelectImg}
            />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  // 选号/历史tab切换
  _renderScrollablePanel() {
    return (
      <View style={styles.tabViewContainer}>
        <ScrollableTabView
          renderTabBar={()=> <ScrollableTabBar/>}
          tabBarBackgroundColor='#f8f8f8'
          tabBarUnderlineStyle={styles.lineStyle}
          tabBarActiveTextColor={THEME.activeColor}
          tabBarInactiveTextColor={THEME.inactiveColor}
        >
          {/* 彩种选号方法 */}
          {this._renderBallsTab()}
          {/* 开奖历史方法 */}
          {this._renderHistoryTab()}
        </ScrollableTabView>
      </View>
    )
  }
  // 彩种选号
  _renderBallsTab() {
    return (
      <View tabLabel="彩种选号" style={{flex:1}}>
        <ScrollView
          alwaysBounceVertical={true}
          style={styles.ballsPanel}
        >
          <View style={styles.playExplanation}>
            <View style={styles.oneBet}>
              <Text style={styles.oneBetMoney}>
                1000.00
              </Text>
              <Text style={styles.oneBetText}>
                单注奖金（元）
              </Text>
            </View>
            <View style={styles.playTips}>
              <Image 
                source={require('../../../../res/images/ic_question.png')}
                style={styles.questionImg}/>
              <Text style={styles.playTipsText}>玩法说明</Text>
            </View>
          </View>
          {/* 小玩法选号子组件 */}
          <WuXingZhiXuanFushi/>
        </ScrollView>
        {/* 选球底部操作栏 */}
        <View style={styles.ballsBottomBar}>
          <Text>1</Text>
        </View>
      </View>
    )
  }
  // 开奖历史
  _renderHistoryTab() {
    return (
      <View tabLabel="开奖历史">
        <Text>
          开奖历史
        </Text>
      </View>
    )
  }
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaViewPlus 
        topInset={false}
        bottomInset={false}
      >
        <NavigationBar
          leftButton={ViewUtils.getLeftButton(()=>this.onBack())}
          popEnabled={false}
          title={'时时彩'}
        />
        {/* 截止栏 */}
        {this._renderCutOffPanel()}
        {/* 选号/历史tab切换 */}
        {this._renderScrollablePanel()}
      </SafeAreaViewPlus>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.containerBgColor
  },
  playContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  playSelect: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: THEME.activeColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  playSelectText: {
    fontSize: 12,
    color: THEME.activeColor
  },
  playSelectImg: {
    width: 16,
    height: 16
  },
  lineStyle: {
    height: 0,
  },
  tabViewContainer: {
    flex: 1,
  },
  ballsPanel: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  playExplanation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5
  },
  oneBet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  oneBetMoney: {
    color: THEME.activeColor,
    fontSize: 17,
    marginLeft: 10,
    marginRight: 10
  },
  oneBetText: {
    color: '#4e3e31',
    fontSize: 12
  },
  questionImg: {
    width: 12,
    height: 12,
    marginRight: 5
  },
  playTips: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  playTipsText: {
    color: '#4e3e31',
    fontSize: 12
  },
  // 选球底部操作栏
  ballsBottomBar: {
    width: '100%',
    height: 49,
    backgroundColor: 'red',
  }
})
