import React, { PureComponent } from 'react'
import {
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image,
    Text,
    TextInput,
    View,
} from 'react-native'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window')

/**
 * @name 公共头部，通过两个参数区分是否显示头部和搜索框
 * @param { Boolean } flags 是否需要返回参数 默认 false
 * @param { Boolean } titleFlag 是否显示标题 默认 false
 * @param { Boolean } rightButtomFlag 是否显示右侧按钮 默认 false
 * @param { String } title 标题名称
 * @param { String } navigation 路由
 * @param { String } routerLink 路由具体跳转位置
 * @param { String } background 整体的背景色
 */
export default class HeaderView extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            leftText:'返回',
            centerText: '',
            states: ''
        }
    }

    render(){
        return(
            <View style={[styles.headerContainer, {backgroundColor: this.props.background || '#FFFFFF'}]}>
                {
                    this.props.flags || false ?
                        <View></View>
                        :
                    <TouchableOpacity activeOpacity={1}  style={styles.headerLft} onPress={() => this.props.navigation.goBack()} >
                        {/* <Image source={require('../res/images/ic_arrow_back_white_36pt.png')} resizeMode={'cover'} style={styles.headerLeftImg} /> */}
                    </TouchableOpacity>
                }
                {
                    this.props.titleFlag || false ?
                        <Viwe></Viwe>
                        :
                    <View style={styles.headerCenterContainer}>
                        <Text style={styles.headerCenterText}>{this.props.title}</Text>
                    </View>
                }
                {
                    // 是否显示右侧文本按钮
                    this.props.rightButtomFlag || false ?
                        <TouchableOpacity activeOpacity={1} style={styles.rightButs}>
                            <View>
                            </View>
                        </TouchableOpacity>
                        :
                        <View></View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 44,

        paddingLeft: 12,
        paddingRight: 12,
        position: 'relative',
        zIndex:0
    },
    rightButs: {
        width: 44,
        height:44,
    },
    headerLft: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: 44,
        height: 44,
        // backgroundColor: 'red',
        position: 'absolute',
        zIndex: 1,
        paddingTop: 12.5,
        paddingLeft: 10,
    },
    headerLeftImg: {
        width: 11,
        height: 19,
    },
    headerCenterContainer: {
        flex:1,
        backgroundColor:'#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        textAlign: 'center',
    },
    headerCenterText: {
        fontSize: 18,
	      color: "#333333"
    }
})