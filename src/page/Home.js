import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Text, Content, View, Button, Left, Right, Icon, Card, CardItem, cardBody } from 'native-base';
import { Actions } from 'react-native-router-flux';
//import { Ionicons } from '@expo/vector-icons';

import Navbar from '../component/Navbar';
import SideMenuDrawer from '../component/SideMenuDrawer';
import CategoryBlock from '../component/CategoryBlock';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class Home extends Component {
   render() {
      var left = (
         <Left style={{ flex: 1 }}>
            <Button onPress={() => this._sideMenuDrawer.open()} style={{ backgroundColor: '#E9446A' }}>
               <Icon name='ios-list-box' />
            </Button>
         </Left>
      );
      var right = (
         <Right style={{ flex: 1 }}>
            <Button onPress={() => Actions.search()} style={{ backgroundColor: '#E9446A' }}>
               <Icon name='ios-search' />
            </Button>
            <Button onPress={() => Actions.cart()} transparent>
               <Icon name='ios-cart' />
            </Button>
         </Right>
      );
      return (
         <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
            <Container>
               <Navbar left={left} right={right} title="MY STORE" />
               <Content>
                  {this.renderCategories()}
               </Content>
            </Container>
         </SideMenuDrawer>
      )
   }

   renderCategories() {
      let cat = [];
      for (var i = 0; i < categories.length; i++) {
         cat.push(
            <CategoryBlock key={categories[i].id} id={categories[i].id} image={categories[i].image} title={categories[i].title} />
         );
      }
      return cat;
   }
}

var categories = [
   {
      id: 1,
      title: 'MEN',
      image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_489/v1500284127/pexels-photo-497848_yenhuf.jpg'
   },
   {
      id: 2,
      title: 'WOMEN',
      image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_460/v1500284237/pexels-photo-324030_wakzz4.jpg'
   },
   {
      id: 3,
      title: 'KIDS',
      image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_445/v1500284286/child-childrens-baby-children-s_shcevh.jpg'
   },
   {
      id: 4,
      title: 'ACCESORIES',
      image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_467/v1500284346/pexels-photo-293229_qxnjtd.jpg'
   }
];