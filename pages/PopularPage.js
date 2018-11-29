import React, { Component } from 'react'
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Button,
  ListView,
  TouchableOpacity,
  RefreshControl
} from 'react-native'
import Toast, {DURATION} from 'react-native-easy-toast'
import fetchRequest from '../util/FetchUtil'

const ds = new ListView.DataSource({rowHasChanged:(r1, r2)=> r1!==r2});
const userListUrl = "getUserList";
export default class PopularPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource: ds,
      isLoading: true
    }
    this.onLoad(userListUrl);
  }
  // 渲染列表
  renderRow(item) {
    return (
      <TouchableOpacity 
        onPress={()=>{
          this.toast.show('你单击了：'+item.fullname)
        }}
      >
        <View style={styles.row}>
          <Text style={styles.tips}>{item.fullname}</Text> 
          <Text style={styles.tips}>{item.email}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  // onLoad
  onLoad(url) {
    fetchRequest(url,"GET")
      .then( res=>{
        this.setState({
          dataSource: ds.cloneWithRows(res.data),
          isLoading: false
        })
      }).catch( err=>{ 
        alert(err)
      })
  }
  // 列表分割线
  renderSeparator(selectID, rowID, adjacentRowHighted) {
    return (
      <View key={rowID} style={styles.line}></View>
    )
  }
  // 列表底部现实
  renderFooter() {
    return (
      <View>
        <Text style={[styles.tcenter,styles.listFoot]}>
          已经到底了！
        </Text>
      </View>
    )
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ListView  
          dataSource = {this.state.dataSource}
          renderRow={(item)=>this.renderRow(item)}
          renderSeparator={(selectID, rowID, adjacentRowHighted)=>this.renderSeparator(selectID, rowID, adjacentRowHighted)}
          renderFooter={()=>this.renderFooter()} 
          refreshControl={<RefreshControl 
            refreshing={this.state.isLoading}
            onRefresh={()=>this.onLoad(userListUrl)}
          />}
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
  row: {
    padding:10
  },
  tips: {
    fontSize:16
  },
  line: {
    height: 1,
    backgroundColor: '#eaeaea'
  },
  tcenter: {
    textAlign: "center"
  },
  listFoot: {
    padding: 10
  }
})
