import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Button, Left } from 'native-base';
import SideMenuDrawer from '../component/SideMenuDrawer';
export default class HeaderLeft extends Component {
   render() {
      return (
         <Left style={{ flex: 1 }}>
            <Button onPress={this.props.onDrawer} style={{ backgroundColor: '#E9446A' }}>
               <Image source={require('../../assets/Icon/Menu30.png')}></Image>
               {/* <Icon name='ios-list-box' /> */}
            </Button>
         </Left>
      )
   }
}
