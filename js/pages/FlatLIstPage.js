import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Button,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  ActivityIndicator
} from 'react-native'
import Toast, {DURATION} from 'react-native-easy-toast'
import fetchRequest from '../util/FetchUtil'

const userListUrl = "getUserList";

export default class FlatLIstPage extends Component {
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
      <TouchableOpacity 
        onPress={()=>{
          this.toast.show('你单击了：'+data.item.fullname)
        }}
      >
        <View style={styles.row}>
          <Text style={styles.tips}>{data.item.fullname}</Text> 
          <Text style={styles.tips}>{data.item.email}</Text>
        </View>
      </TouchableOpacity>
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
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
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
    color: '#000'
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
  }
})
