import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  SectionList,
  Dimensions,
  TouchableHighlight,
  ScrollView,
  SafeAreaView
} from 'react-native'
import Toast, { DURATION } from 'react-native-easy-toast'
import fetchRequest from '../util/FetchUtil'
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient'

import StatusBarView from '../components/StatusBarView'
import HeaderView from '../components/HeaderView'

const { width, height } = Dimensions.get('window')
const wd = (width-40)/3,
ht= wd/123*107;
const userListUrl = 'getCityArrayList'

export default class PopularPage extends Component {
  constructor(props) {
    super(props)
  }
  // 头部
  _renderHeader() {
    return (
      <View style={styles.header}>
        <Image
          source={require('../res/images/ic_logo.png')}
          style={styles.logo}
          resizeMode="stretch"
          />
        <Image
          source={require('../res/images/ic_service.png')}
          style={styles.service}
          resizeMode="stretch"
        />
      </View>
    )
  }
  // 公告
  _renderNews() {
    const {navigation} = this.props;
    return (
      <View style={styles.newsContainer}>
        <Image
          source={require('../res/images/ic_notice.png')}
          style={styles.noticeImg}
          resizeMode="stretch"
        />
        <Text style={styles.noticeSolid}>
          |
        </Text>
        <Swiper 
          style={styles.news}
          horizontal ={false}
          autoplay
          loop
          showsPagination={false}
          removeClippedSubviews={false}
        >
          <Text style={styles.newsText}
            onPress={() => {
              navigation.navigate('page1')
            }}
          >
            重庆时时彩上线了
          </Text>
          <Text style={styles.newsText}>
            重庆时时彩上线了
          </Text>
          <Text style={styles.newsText}>
            重庆时时彩上线了
          </Text>
        </Swiper>
        <Image
          source={require('../res/images/ic_arrow_right.png')}
          style={styles.newsArrowImg}
          resizeMode="center"
        />
      </View>
    )
  }
  // 轮播图
  _renderBanner() {
    return (
      <Swiper 
        style={styles.banners}
        backgroundColor={'#1a1514'} 
        horizontal ={true}
        autoplay
        loop
        paginationStyle={styles.paginationStyle}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        removeClippedSubviews={false}
      >
        <View>
          <Image
            source={{
              uri:'https://www.uying.app/ad/0839bd4863e5e5a7e79b787a122eca33.png'
            }}
            style={styles.bannerImg}
            resizeMode="stretch"
          />
        </View>
        <View>
          <Image
            source={{
              uri:'https://www.uying.app/ad/1a333bc8c4e8d9dcf7bdc4b93c8e6ddb.png'
            }}
            style={styles.bannerImg}
            resizeMode="stretch"
          />
        </View>
        <View>
          <Image
            source={{
              uri:'https://www.uying.app/ad/212912ea55b63b74827a99055ef90b8a.png'
            }}
            style={styles.bannerImg}
            resizeMode="stretch"
          />
        </View>
      </Swiper>
    )
  }
  // 彩种列表
  _renderLotteryList() {
    return (
      <View style={styles.lotteryContainer}>
        {/* 时时彩 */}
        <View style={styles.lotteryBox}>
          <View style={styles.lotteryTitle}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#a25b13', '#df9246']} style={styles.lotteryTitleI}/>
            <Text>
              时时彩
            </Text>
            <Image
              source={require('../res/images/ic_hot.png')}
              style={styles.hotImg}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.lotteryCnt}>
            <View  style={styles.lotteryItem}>
              <ImageBackground
                source={require('../res/images/lotteryLogo/ic_logo_bg_cqssc.png')}
                style={styles.lotteryBg}
                resizeMode="stretch"
              >
                <Image
                  source={require('../res/images/lotteryLogo/ic_logo_cqssc.png')}
                  style={styles.lotteryLogo}
                  resizeMode="stretch"
                />
                <Text style={styles.lotteryText}>
                  重庆时时彩
                </Text>
              </ImageBackground>
            </View>
            <View  style={styles.lotteryItem}>
              <ImageBackground
                source={require('../res/images/lotteryLogo/ic_logo_bg_hljssc.png')}
                style={styles.lotteryBg}
                resizeMode="stretch"
              >
                <Image
                  source={require('../res/images/lotteryLogo/ic_logo_hljssc.png')}
                  style={styles.lotteryLogo}
                  resizeMode="stretch"
                />
                <Text style={styles.lotteryText}>
                  黑龙江时时彩
                </Text>
              </ImageBackground>
            </View>
            <View  style={styles.lotteryItem}>
              <ImageBackground
                source={require('../res/images/lotteryLogo/ic_logo_bg_tjssc.png')}
                style={styles.lotteryBg}
                resizeMode="stretch"
              >
                <Image
                  source={require('../res/images/lotteryLogo/ic_logo_tjssc.png')}
                  style={styles.lotteryLogo}
                  resizeMode="stretch"
                />
                <Text style={styles.lotteryText}>
                  天津时时彩
                </Text>
              </ImageBackground>
            </View>
          </View>
        </View>
        {/* 11选5 */}
        <View style={styles.lotteryBox}>
          <View style={styles.lotteryTitle}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#a25b13', '#df9246']} style={styles.lotteryTitleI}/>
            <Text>
              11选5
            </Text>
            <Image
              source={require('../res/images/ic_hot.png')}
              style={styles.hotImg}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.lotteryCnt}>
            <View  style={styles.lotteryItem}>
              <ImageBackground
                style={styles.lotteryBg}
                resizeMode="stretch"
              >
                <Image
                  source={require('../res/images/lotteryLogo/ic_logo_sd11x5.png')}
                  style={styles.lotteryLogo}
                  resizeMode="stretch"
                />
                <Text style={styles.lotteryTextB}>
                  山东11选5
                </Text>
              </ImageBackground>
            </View>
            <View  style={styles.lotteryItem}>
              <ImageBackground
                style={styles.lotteryBg}
                resizeMode="stretch"
              >
                <Image
                  source={require('../res/images/lotteryLogo/ic_logo_jx11x5.png')}
                  style={styles.lotteryLogo}
                  resizeMode="stretch"
                />
                <Text style={styles.lotteryTextB}>
                  江西11选5
                </Text>
              </ImageBackground>
            </View>
            <View  style={styles.lotteryItem}>
              <ImageBackground
                style={styles.lotteryBg}
                resizeMode="stretch"
              >
                <Image
                  source={require('../res/images/lotteryLogo/ic_logo_tjssc.png')}
                  style={styles.lotteryLogo}
                  resizeMode="stretch"
                />
                <Text style={styles.lotteryTextB}>
                  天津时时彩
                </Text>
              </ImageBackground>
            </View>
          </View>
        </View>
        {/* 快三 */}
        <View style={styles.lotteryBox}>
          <View style={styles.lotteryTitle}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#a25b13', '#df9246']} style={styles.lotteryTitleI}/>
            <Text>
              快三
            </Text>
            <Image
              source={require('../res/images/ic_hot.png')}
              style={styles.hotImg}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.lotteryCnt}>
            <View  style={styles.lotteryItem}>
              <ImageBackground
                style={styles.lotteryBg}
                resizeMode="stretch"
              >
                <Image
                  source={require('../res/images/lotteryLogo/ic_logo_jsk3.png')}
                  style={styles.lotteryLogo}
                  resizeMode="stretch"
                />
                <Text style={styles.lotteryTextB}>
                  江苏快3
                </Text>
              </ImageBackground>
            </View>
            <View  style={styles.lotteryItem}>
              <ImageBackground
                style={styles.lotteryBg}
                resizeMode="stretch"
              >
                <Image
                  source={require('../res/images/lotteryLogo/ic_logo_ahk3.png')}
                  style={styles.lotteryLogo}
                  resizeMode="stretch"
                />
                <Text style={styles.lotteryTextB}>
                  安徽快3
                </Text>
              </ImageBackground>
            </View>
            <View  style={styles.lotteryItem}>
              <ImageBackground
                style={styles.lotteryBg}
                resizeMode="stretch"
              >
                <Image
                  source={require('../res/images/lotteryLogo/ic_logo_hnk3.png')}
                  style={styles.lotteryLogo}
                  resizeMode="stretch"
                />
                <Text style={styles.lotteryTextB}>
                  河南快3
                </Text>
              </ImageBackground>
            </View>
          </View>
        </View>
        {/* 其它 */}
        <View style={styles.lotteryBox}>
          <View style={styles.lotteryTitle}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#a25b13', '#df9246']} style={styles.lotteryTitleI}/>
            <Text>
              其它
            </Text>
            <Image
              source={require('../res/images/ic_hot.png')}
              style={styles.hotImg}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.lotteryCnt}>
            <View  style={styles.lotteryItem}>
              <ImageBackground
                style={styles.lotteryBg}
                resizeMode="stretch"
              >
                <Image
                  source={require('../res/images/lotteryLogo/ic_logo_hklhc.png')}
                  style={styles.lotteryLogo}
                  resizeMode="stretch"
                />
                <Text style={styles.lotteryTextB}>
                  香港六合彩
                </Text>
              </ImageBackground>
            </View>
            <View  style={styles.lotteryItem}>
              <ImageBackground
                style={styles.lotteryBg}
                resizeMode="stretch"
              >
                <Image
                  source={require('../res/images/lotteryLogo/ic_logo_bjpk10.png')}
                  style={styles.lotteryLogo}
                  resizeMode="contain"
                />
                <Text style={styles.lotteryTextB}>
                  北京PK10
                </Text>
              </ImageBackground>
            </View>
          </View>
        </View>
      </View>
    )
  }
  render() {
    return(
      <View 
        style={styles.container}
      >
        <StatusBarView backgroundColor={'#000'}/>
        {/* 固定头 */}
        {this._renderHeader()}
        {/* 滚动区域 */}
        <View style={styles.scrollContainer}>
          <ScrollView>
            {/* 轮播图 */}
            <View>
            {this._renderBanner()}
            </View>
            {/* 公告 */}
            {this._renderNews()}
            {/* 彩种列表 */}
            {this._renderLotteryList()}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0c0a0a',
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
  },
  logo: {
    width: 74,
    height: 24,
  },
  service: {
    width: 22,
    height: 24,
  },
  scrollContainer: {
    flex: 1,
  },
  newsContainer: {
    backgroundColor: '#fff',
    width: 'auto',
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginLeft: 10,
    paddingRight: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius:5,
  },
  noticeImg: {
    width: 14,
    height: 14,
    marginRight: 10,
  },
  noticeSolid: {
    color: 'rgba(211,163,122,.8)',
    marginRight: 5
  },
  news: {
    height: 40
  },
  newsText: {
    fontSize: 12,
    lineHeight: 40
  },
  newsArrowImg: {
    width: 12,
    height: 10
  },
  banners: {
    paddingLeft: 10,
    paddingRight: 10,
    width: 355,
    height: 140,
  },
  bannerImg: {
    width: 355,
    height: 123
  },
  paginationStyle: {
    bottom: 3
  },
  dotStyle: {
    width: 12,
    height: 3,
    borderRadius:1.5,
    backgroundColor: '#5d4637'
  },
  activeDotStyle:{
    width: 12,
    height: 3,
    borderRadius:1.5,
    backgroundColor: '#fff'
  },
  lotteryBox: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  lotteryTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  lotteryTitleI: {
    width: 3,
    height: 15,
    marginRight: 5,
  },
  hotImg: {
    width: 30,
    height: 17,
    marginLeft: 5
  },
  lotteryCnt: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  lotteryItem: {
    width: wd,
    height: ht,
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
    marginBottom: 10,
    marginLeft: 5,
  },
  lotteryBg: {
    width: wd,
    height: ht,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
  },
  lotteryLogo: {
    width: wd/2,
    height: wd/2
  },
  lotteryText: {
    color: '#fff',
    fontSize: 12
  },
  lotteryTextB: {
    color: '#333',
    fontSize: 12
  }
})
