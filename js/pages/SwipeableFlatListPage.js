import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Button,
  TouchableOpacity,
  SwipeableFlatList,
  RefreshControl,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native'
import Toast, {DURATION} from 'react-native-easy-toast'
import fetchRequest from '../util/FetchUtil'

const userListUrl = "getUserList";

export default class SwipeableFlatListPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      dataArray: []
    }
    this._onLoad(userListUrl)
  }
  // onLoad
  _onLoad() {
    fetchRequest(userListUrl,"GET")
      .then( res=>{
        this.setState({
          dataArray: res.data,
          isLoading: false
        })
      }).catch( err=>{ 
        alert(err)
      })
  }
  // 列表项
  _renderRow(data) {
    return (
      <View style={styles.row}>
        <Text style={styles.tips}>{data.item.fullname}</Text> 
        <Text style={styles.tips}>{data.item.email}</Text>
      </View>
    )
  }
  // 上拉加载更多
  _genIndicator() {
    return <View style={styles.indicatorContainer}>
      <ActivityIndicator
        size={'small'}
        animating={true}
        color={'red'}
      />
      <Text style={styles.indicator}>正在加载更多</Text> 
    </View>
  }
  // 侧滑菜单
  _genQuickAction() {
    return <View style={styles.quickContainer}>
      <TouchableHighlight
        onPress={()=>{
          alert('确认删除？')
        }}
      >
        <View style={styles.quick}>
          <Text style={styles.delete}>删除</Text>
        </View>
      </TouchableHighlight>
    </View>
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SwipeableFlatList
          data={this.state.dataArray}
          renderItem={(data)=>this._renderRow(data)}
          refreshControl={<RefreshControl 
            title={'刷新中'}
            colors={['red']}
            tintColor={'red'}
            titleColor={'red'}
            refreshing={this.state.isLoading}
            onRefresh={()=>this._onLoad()}
          />}
          ListFooterComponent={() => this._genIndicator()}
          renderQuickActions={()=> this._genQuickAction()}
          maxSwipeDistance={80}
        />
        <Toast
          ref={toast=>{
            this.toast = toast
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: '#169',
    height: 200,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    padding:10,
    backgroundColor: '#169'
  },
  tips: {
    fontSize:16,
    color: '#fff'
  },
  line: {
    height: 1,
    backgroundColor: '#eaeaea'
  },
  tcenter: {
    textAlign: "center"
  },
  indicatorContainer: {
    alignItems: 'center'
  },
  indicator: {
    color: 'red',
    margin: 10,
    fontSize: 12
  },
  quickContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  quick: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width:80,
    elevation: 5,//漂浮的效果
  },
  delete: {
    color: "#d8fffa",
    textAlign: "center"
  }
})
