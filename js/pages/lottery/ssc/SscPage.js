/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Animated, Easing, Alert, } from 'react-native'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import LinearGradient from 'react-native-linear-gradient'

import SafeAreaViewPlus from '../../../components/SafeAreaViewPlus'
import NavigationBar from '../../../components/NavigationBar'
import THEME from '../../../style/Theme';
import ViewUtils from '../../../util/ViewUtil'
import WuXingZhiXuanFushi from '../../../components/ballsSection/ssc/wuxing/zhixuan/Fushi'
export default class SscPage extends Component {
  constructor(props){
    super(props);
    this.state={
      playSelectPanelShow: false,
      modalHeight: new Animated.Value(0),
      maxHeight: 300,
      fadeOutOpacity: new Animated.Value(0),
    }
  }
  // 回退
  onBack() {
    this.props.navigation.pop();
  }
  // 展开/收起 玩法选择面板
  togglePlaySecelePanel() {
    const playSelectPanelShow = this.state.playSelectPanelShow
    let initialValue = !this.state.playSelectPanelShow?0:this.state.maxHeight
    let finalValue = this.state.playSelectPanelShow?0:this.state.maxHeight
    let initOpacity = !this.state.playSelectPanelShow?0:1
    let finalOpacity = this.state.playSelectPanelShow?0:1
    if(!playSelectPanelShow){
      this.setState({
        playSelectPanelShow: !playSelectPanelShow
      });
      Animated.sequence([ // 组合动画 parallel（同时执行）、sequence（顺序执行）、stagger（错峰，其实就是插入了delay的parrllel）和delay（延迟
        Animated.timing(this.state.fadeOutOpacity, { // 从时间范围映射到渐变的值。
          toValue: finalOpacity,
          duration: 50,
          easing: Easing.linear, // 线性的渐变函数
        }), 
        Animated.timing(this.state.modalHeight, {
          toValue: finalValue,
          duration: 300,
          easing: Easing.linear, 
        })
      ]).start();
    }else{
      Animated.sequence([
        Animated.timing(this.state.modalHeight, {
          toValue: finalValue,
          duration: 300,
          easing: Easing.linear,
        }),
        Animated.timing(this.state.fadeOutOpacity, {
          toValue: finalOpacity,
          duration: 100,
          easing: Easing.linear,
        }),
      ]).start(()=>{
        this.setState({
          playSelectPanelShow: !playSelectPanelShow
        })
      });
    }
  }
  _renderCutOffPanel() {
    return (
      <View style={styles.playContainer}>
        <Text>距0023期截止：09:23</Text>
        <TouchableOpacity onPress={()=>this.togglePlaySecelePanel()}>
          <View style={styles.playSelect}>
            <Text style={styles.playSelectText}>
              五星直选复式
            </Text>
            <Image 
              source={require('../../../../res/images/ic_select.png')}
              style={[styles.playSelectImg, styles.playSelectImgDown]}
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
          tabBarBackgroundColor={THEME.containerBgColor}
          tabBarUnderlineStyle={styles.lineStyle}
          tabBarActiveTextColor={THEME.activeColor}
          tabBarInactiveTextColor={THEME.inactiveColor}
        >
          {/* 彩种选号方法 */}
          {this._renderBallsTab()}
          {/* 开奖历史方法 */}
          {this._renderHistoryTab()}
        </ScrollableTabView>
        {/* 玩法选择面板 */}
        { this.state.playSelectPanelShow?this._renderPlaySelectPanel():null}
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
          <View style={styles.clearContainer}>
            <Image source={require('../../../../res/images/ic_clear.png')}
              style={styles.clearImg}/>
            <Text style={styles.clearText}>清空</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.unit}>
            <Text style={styles.unitText}>
              元
            </Text>
            <Image source={require('../../../../res/images/ic_full_arrow_down.png')}
              style={styles.unitImg}/>
          </View>
          <View style={styles.statistics}>
            <Image style={styles.statisticsImg}
              source={require('../../../../res/images/ic_add_no.png')}
            />
            <View style={styles.statisticsCnt}>
              <Text style={styles.statisticsText}>
                已选
                <Text style={styles.numText}>0</Text>
                注
              </Text>
              <Text style={[styles.statisticsText, styles.mt10]}>
                合计
                <Text style={styles.numText}>0</Text>
                元
              </Text>
            </View>
          </View>
          {/* 加入购彩篮按钮 */}
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={THEME.linearGradientColor}>
            <View style={styles.addCart}>
              <View style={styles.addCartView}>
                <Text style={styles.addCartText}
                  onPress={()=>{this.addCart()}}
                  >
                  加入购彩蓝
                </Text>
                <View style={styles.cartNumView}><Text style={styles.cartNum}>1</Text></View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    )
  }
  // 跳转到购彩蓝页面
  addCart() {
    
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
  // 玩法下拉选择面板
  _renderPlaySelectPanel() {
    return (
      <View style={[styles.playSelectPanel]}>
        {/* 遮罩层 */}
        <TouchableWithoutFeedback onPress={()=>this.togglePlaySecelePanel()}>
          <Animated.View 
            style={[styles.playMask,{opacity: this.state.fadeOutOpacity}]}
            >
          </Animated.View>
        </TouchableWithoutFeedback>
        {/* 内容区域 */}
        <Animated.View  
          style={[{height:this.state.modalHeight}]}
          >
          <ScrollView style={styles.playSelectCnt}  alwaysBounceVertical={false}>
            {/* 玩法群 */}
            <View style={styles.playGroupsSelect}>
              <Text style={styles.playGroupsTitle}>玩法选择</Text>
              <View style={styles.groupsSection}>
                <View style={styles.groupsItem}>
                  <Text style={[styles.groupsItemText,styles.activeText]}>
                    趣味
                  </Text>
                </View>
                <View style={styles.groupsItem}>
                  <Text style={styles.groupsItemText}>
                    五星
                  </Text>
                </View>
                <View style={styles.groupsItem}>
                  <Text style={styles.groupsItemText}>
                    四星
                  </Text>
                </View>
                <View style={styles.groupsItem}>
                  <Text style={styles.groupsItemText}>
                    三星
                  </Text>
                </View>
                <View style={styles.groupsItem}>
                  <Text style={styles.groupsItemText}>
                    二星
                  </Text>
                </View>
                <View style={styles.groupsItem}>
                  <Text style={styles.groupsItemText}>
                    一星
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.playline}></View>
            {/* 玩法组 */}
            <View style={styles.playGroupSelect}>
              <View style={styles.groupRow}>
                <Text style={styles.groupRowTitle}>
                  直选：
                </Text>
                <View style={styles.groupItemCnt}>
                  <View style={styles.groupItem}>
                    <Text style={[styles.groupItemText,styles.activeText]}>
                      直选复式
                    </Text>
                  </View>
                  <View style={styles.groupItem}>
                    <Text style={styles.groupItemText}>
                      直选组合
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.groupRow}>
                <Text style={styles.groupRowTitle}>
                  组选：
                </Text>
                <View style={styles.groupItemCnt}>
                  <View style={styles.groupItem}>
                    <Text style={styles.groupItemText}>
                      组选120
                    </Text>
                  </View>
                  <View style={styles.groupItem}>
                    <Text style={styles.groupItemText}>
                      组选60
                    </Text>
                  </View>
                  <View style={styles.groupItem}>
                    <Text style={styles.groupItemText}>
                      组选30
                    </Text>
                  </View>
                  <View style={styles.groupItem}>
                    <Text style={styles.groupItemText}>
                      组选20
                    </Text>
                  </View>
                  <View style={styles.groupItem}>
                    <Text style={styles.groupItemText}>
                      组选10
                    </Text>
                  </View>
                  <View style={styles.groupItem}>
                    <Text style={styles.groupItemText}>
                      组选5
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </Animated.View>
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
  playSelectPanel: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
  },
  playMask: {
    position: 'absolute',
    top:0,
    left: 0,
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.4)'
  },
  playSelectCnt: {
    backgroundColor: THEME.containerBgColor,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    flex:1
  },
  playGroupsSelect: {
    // paddingLeft: 10,
    // paddingRight: 10
  },
  playline: {
    width: '96%',
    height: 1,
    backgroundColor: THEME.borderColor,
    marginTop: 10,
    marginLeft: '2%',
  },
  playGroupsTitle: {
    fontSize: 16,
    color: THEME.normalColor,
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: '2%'
  },
  groupsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  groupsItem: {
    width: '25%',
    paddingLeft: '2%',
    paddingRight: '2%',
    height: 26,
    marginBottom: 10,
  },
  groupsItemText: {
    borderWidth: 1,
    borderColor: THEME.borderColor,
    fontSize: 14,
    lineHeight: 24,
    flex: 1,
    textAlign: 'center',
    borderRadius: 3,
    overflow: 'hidden'
  },
  playGroupSelect: {
    paddingLeft: '2%',
    paddingRight: '2%',
    paddingTop: 15,
    paddingBottom: 15
  },
  groupRow: {
    flexDirection: 'row',
    // alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 10
  },
  groupRowTitle: {
    height: 26,
    lineHeight: 26
  },
  groupItemCnt: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1
  },
  groupItemText: {
    height: 26,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 1,
    borderColor: THEME.borderColor,
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    borderRadius: 3,
    marginRight: 5,
    marginBottom: 8,
    overflow: 'hidden'
  },
  activeText: {
    backgroundColor: THEME.activeColor,
    borderColor: THEME.activeColor,
    borderRadius: 3,
    color: '#fff',
  },
  // 玩法下拉选择面板
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
    height: 16,
  },
  lineStyle: {
    height: 0,
  },
  tabViewContainer: {
    flex: 1,
    position: 'relative'
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
    fontSize: 12,
  },
  // 选球底部操作栏
  ballsBottomBar: {
    width: '100%',
    height: 49,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  clearContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 49,
    height: 49,
  },
  clearImg: {
    width: 19,
    height: 19,
  },
  clearText: {
    fontSize: 10,
    marginTop: 3
  },
  line: {
    width: 1,
    backgroundColor: '#e7e7e7',
    height: 30
  },
  unit: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 53,
    height: 49,
    // backgroundColor: 'red'
  },
  unitText: {
    fontSize: 16,
    marginTop: 5
  },
  unitImg: {
    width: 8,
    height: 8,
  },
  statistics: {
    backgroundColor: THEME.containerBgColor,
    flexDirection: 'row',
    alignItems: 'center',
    height: 49,
    paddingLeft: 15,
    flex:1,
    // padding:
  },
  statisticsImg: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  statisticsCnt: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statisticsText: {
    fontSize: 12
  },
  mt10: {
    marginTop: 5
  },
  numText: {
    color: THEME.activeColor,
    width: 20,
    height: 49
  },
  addCart: {
    height: 49,
    width: 132,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addCartView: {
    position: 'relative',
  },
  addCartText: {
    fontSize: 17,
    color: '#fff',
  },
  cartNumView: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    position: 'absolute',
    right: -12,
    top: -9
  },
  cartNum: {
    color: THEME.activeColor,
    textAlign: 'center'
  }
})
