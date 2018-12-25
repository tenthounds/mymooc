import React, { PureComponent } from 'react'
import {Image, StyleSheet} from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import THEME from '../style/Theme';
import HallPage from '../pages/HallPage';
import TrendingPage from '../pages/TrendingPage'
import FavoritePage from '../pages/FavoritePage'
import MyPage from '../pages/MyPage'
import SscPage from '../pages/lottery/ssc/SscPage'

const HallPageIcon = require("../../res/images/ic_hall.png");
const HallPageSelectedIcon = require("../../res/images/ic_hall_active.png");
const TrendingIcon = require("../../res/images/ic_trending.png");
const FavoriteIcon = require("../../res/images/ic_activity.png");
const FavoriteSelectedIcon = require("../../res/images/ic_activity_active.png");
const MyIcon = require("../../res/images/ic_my.png");
export const TabNavigator = createBottomTabNavigator({
  HallPage: {
    screen: HallPage,
    navigationOptions: {
      tabBarLabel:'大厅',
      tabBarIcon:(({tintColor,focused}) => {
        return(
          <Image 
            source={focused?HallPageSelectedIcon:HallPageIcon}
            style={styles.image}
          />
        )
      })
    }
  },
  TrendingPage: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel:'趋势',
      tabBarIcon:(({tintColor,focused}) => {
        return(
          <Image 
            source={TrendingIcon}
            style={styles.image}
          />
        )
      })
    }
  },
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel:'收藏',
      tabBarIcon:(({tintColor,focused}) => {
        return(
          <Image 
            source={focused?FavoriteSelectedIcon:FavoriteIcon}
            style={styles.image}
          />
        )
      })
    }
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel:'我的',
      tabBarIcon:(({tintColor,focused}) => {
        return(
          <Image 
            source={MyIcon}
            style={styles.image}
          />
        )
      })
    }
  }
}, {
  gesturesEnabled: true,
  tabBarVisible: true,
  tabBarPosition:'bottom',
  swipeEnabled:false, // 是否允许在标签之间进行滑动。
  animationEnabled: true, // 是否在更改标签时显示动画。
  lazy:true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
  initialRouteName:'HallPage', // 设置默认的页面组件
  backBehavior:'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  tabBarOptions:{
    activeTintColor: THEME.activeColor, // 选中的文字颜色
    inactiveTintColor: '#333333', // 未选中的文字颜色
    showIcon:true,
    labelStyle:{
      fontSize: 12, //label的样式。
    }, 
  }
})
export const AppNavigators = createStackNavigator({
  Home: {
    screen: TabNavigator,
  },
  SscPage: {
    screen: SscPage
  }
},{
  navigationOptions: {
    header: null
  }
})

const styles = StyleSheet.create({
  image: {
    height: 22,
    width: 22
  }
})