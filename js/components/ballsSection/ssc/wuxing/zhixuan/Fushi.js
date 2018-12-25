/**
 * 五星直选复式
 */

import React, { Component } from 'react'
import { Stylesheet, Text, View,TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { ballsStyles,THEME} from '../../../../../style/BallsSectionStyle'
export default class Fushi extends Component{
  render() {
    return (
      <View style={ballsStyles.ballsPanelChildren}>
        <View style={ballsStyles.ballContent}>
          <View style={ballsStyles.ballContentTop}>
            <Text style={ballsStyles.ballTitle}>万位</Text>
            <View style={ballsStyles.ballsToolBar}>
              <TouchableOpacity>
                <Text style={[ballsStyles.toolBarItem,ballsStyles.toolBarItemActive]}>全</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>大</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>小</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>奇</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>偶</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>清</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={ballsStyles.ballsContentBottom}>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <LinearGradient colors={['#f3a46f','#ee843d','#f3a46f']} style={ballsStyles.activeBallsLinear}>
                  <Text style={[ballsStyles.ballsItemText,ballsStyles.ballsItemTextActive]}>0</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>1</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>2</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>4</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>5</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>7</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>8</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>9</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={ballsStyles.ballContent}>
          <View style={ballsStyles.ballContentTop}>
            <Text style={ballsStyles.ballTitle}>千位</Text>
            <View style={ballsStyles.ballsToolBar}>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>全</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>大</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>小</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>奇</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>偶</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>清</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={ballsStyles.ballsContentBottom}>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>0</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>1</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>2</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>4</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>5</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>7</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>8</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>9</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={ballsStyles.ballContent}>
          <View style={ballsStyles.ballContentTop}>
            <Text style={ballsStyles.ballTitle}>百位</Text>
            <View style={ballsStyles.ballsToolBar}>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>全</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>大</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>小</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>奇</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>偶</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>清</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={ballsStyles.ballsContentBottom}>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>0</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>1</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>2</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>4</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>5</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>7</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>8</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>9</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={ballsStyles.ballContent}>
          <View style={ballsStyles.ballContentTop}>
            <Text style={ballsStyles.ballTitle}>十位</Text>
            <View style={ballsStyles.ballsToolBar}>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>全</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>大</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>小</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>奇</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>偶</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>清</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={ballsStyles.ballsContentBottom}>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>0</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>1</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>2</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>4</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>5</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>7</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>8</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>9</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={ballsStyles.ballContent}>
          <View style={ballsStyles.ballContentTop}>
            <Text style={ballsStyles.ballTitle}>个位</Text>
            <View style={ballsStyles.ballsToolBar}>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>全</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>大</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>小</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>奇</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>偶</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={ballsStyles.toolBarItem}>清</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={ballsStyles.ballsContentBottom}>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>0</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>1</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>2</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>4</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>5</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>7</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>8</Text>
              </TouchableOpacity>
            </View>
            <View style={ballsStyles.ballsItem}>
              <TouchableOpacity>
                <Text style={ballsStyles.ballsItemText}>9</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
