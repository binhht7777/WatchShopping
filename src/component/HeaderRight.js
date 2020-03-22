import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Button, Right } from 'native-base';
import SideMenuDrawer from '../component/SideMenuDrawer';

export default class HeaderRight extends Component {
   render() {
      return (
         <Right style={{ flex: 1 }}>
            <Button onPress={this.props.onSearch} style={{ backgroundColor: '#E9446A' }}>
               <Image source={require('../../assets/Icon/Search30.png')}></Image>
               {/* <Icon name='ios-search' /> */}
            </Button>
            <Button onPress={this.props.onCart} transparent>
               <Image source={require('../../assets/Icon/Shoppingcart30.png')}></Image>
               {/* <Icon name='ios-cart' /> */}
            </Button>
         </Right>
      )
   }
}
