import Theme from './Theme'
import { StyleSheet } from 'react-native'
const THEME = Theme
const ballsStyles = {
  ballsPanelChildren: {
    marginBottom: 40
  },
  ballContent: {
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10
  },
  ballContentTop: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ballTitle: {
    fontSize: 14
  },
  ballsToolBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  toolBarItem: {
    fontSize: 13,
    marginLeft: 20,
    color: THEME.inactiveColor,
    textAlign: 'center'
  },
  toolBarItemActive: {
    color: '#ee843d'
  },
  ballsContentBottom: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  ballsItem: {
    width: '20%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  activeBallsLinear: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  ballsItemText: {
    width: 40,
    height: 40,
    borderRadius: 20,
    lineHeight: 40,
    borderColor: THEME.inactiveColor,
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 20,
  },
  ballsItemTextActive: {
    color: '#fff',
    borderColor: 'transparent',
  }
}

export  { ballsStyles,THEME}
