/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Container, Content, View, Left, Right, Button, Icon, Grid, Col, Card } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import SideMenu from '../component/SideMenu';
import SideMenuDrawer from '../component/SideMenuDrawer';
import Product from '../component/Product';
import HeaderLeft from "../component/HeaderLeft";
import HeaderRight from "../component/HeaderRight";


var linkImg = "D:/Study/React Native/My Project/Expo/WatchShopping/assets/Images/";


export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }



  UNSAFE_componentWillMount() {
    var products = [
      { id: 1, title: 'OMEGA CO‑AXIAL MASTER CHRONOMETER CHRONOGRAPH 44 MM', categoryId: 5, categoryTitle: 'MEN', code: '210.92.44.20.01.001', price: '2500$', image: require(linkImg + 'omega-co-axial-master-chronometer435.png'), description: "Since 1993, the Seamaster Professional Diver 300M has enjoyed a legendary following. Today’s modern collection has embraced that famous ocean heritage and updated it with OMEGA’s best innovation and design. This 44 mm chronograph model is crafted from stainless steel and 18K Sedna™ gold, and includes a polished black ceramic bezel with a Ceragold™ diving scale. The pushers are also polished black ceramic, as well as the dial which features laser-engraved waves and a date window at 6 o’clock.." },
      { id: 2, title: 'OMEGA CO‑AXIAL MASTER CHRONOMETER 43.5 MM', categoryId: 2, categoryTitle: 'MEN', code: '210.22.44.51.01.001', price: '1200$', image: require(linkImg + 'omega-co-axial-master-chronometer-chronograph.png'), description: "Since 1993, the Seamaster Professional Diver 300M has enjoyed a legendary following. Today’s modern collection has embraced that famous ocean heritage and updated it with OMEGA’s best innovation and design." },
      { id: 3, title: 'OMEGA CO‑AXIAL MASTER CHRONOMETER 42 MM', categoryId: 1, categoryTitle: 'WOMEN', code: '210.30.42.20.03.001', price: '2000$', image: require(linkImg + 'omega-co-axial-master-chronometer.png'), description: "Since 1993, the Seamaster Professional Diver 300M has enjoyed a legendary following. Today’s modern collection has embraced that famous ocean heritage and updated it with OMEGA’s best innovation and design." },
      { id: 4, title: 'CO‑AXIAL GMT CHRONOGRAPH 44 MM', categoryId: 5, categoryTitle: 'MEN', code: '212.30.44.52.03.001', price: '2400$', image: require(linkImg + 'omega-co-axial-gmt-chronograph-44.png'), description: "OMEGA’s sporty Seamaster collection is a tribute to the brand’s maritime legacy. This exquisite example of our renowned watchmaking pays homage to OMEGA’s dive watch heritage and our adventurous pioneering spirit." },
      { id: 5, title: 'CO‑AXIAL CHRONOGRAPH 44 MM', categoryId: 5, categoryTitle: 'WOMEN', code: '212.92.44.50.99.001', price: '2200$', image: require(linkImg + 'omega-co-axial-chronograph-44.png'), description: "OMEGA has long supported the able yachtsmen of Emirates Team New Zealand and the Seamaster Diver 300M ETNZ boldly celebrates the team's campaign to claim sailing’s greatest trophy, the America’s Cup." },
      { id: 6, title: 'CO‑AXIAL CHRONOGRAPH 41.5 MM', categoryId: 2, categoryTitle: 'MEN', price: '3200$', image: require(linkImg + 'omega-300m-co-axial-41.png'), description: "This OMEGA Seamaster Diver 300M Chronograph features a lacquered blue dial with a 30-minute recorder at 3 o'clock, a 12-hour recorder at 6 o'clock and a small seconds dial at 9 o'clock. The polished blue ceramic unidirectional rotating bezel is mounted on a 41.5 mm stainless steel case with a helium-escape valve and an integrated date corrector at 10 o'clock." },
      { id: 7, title: 'CO‑AXIAL 41 MM', categoryId: 1, categoryTitle: 'WOMEN', code: '212.32.41.20.04.001', price: '2100$', image: require(linkImg + 'omega-co-axial-chronograph-41-5.png'), description: "The wave-pattern screw-in caseback is engraved with Commander’s Watch, Limited Edition and the limited edition number. The see-through caseback reveals a rotor with 9mm bullet and decorative plate bearing the 007 and OMEGA logo, as well as the Calibre number." },
      { id: 8, title: 'OMEGA CO‑AXIAL 34 MM', categoryId: 5, categoryTitle: 'WOMEN', code: '425.65.34.20.55.010', price: '4200$', image: require(linkImg + 'omega-co-axial-34.png'), description: "In this model, 18K Sedna™ gold has been used to create both the 34 mm case and the bracelet. This stunning material also features on the polished alpha-shaped hands, as well as 11 indexes, which are set with diamonds." },
    ];
    this.setState({ items: products });
  }

  render() {
    var left = (
      // <Left style={{ flex: 1 }}>
      //   <Button onPress={() => this._sideMenuDrawer.open()} transparent>
      //     <Icon name='ios-menu' />
      //   </Button>
      // </Left>
      <HeaderLeft onDrawer={() => this._sideMenuDrawer.open()} />
    );
    var right = (
      // <Right style={{ flex: 1 }}>
      //   <Button onPress={() => Actions.search()} transparent>
      //     <Icon name='ios-search' />
      //   </Button>
      //   <Button onPress={() => Actions.cart()} transparent>
      //     <Icon name='ios-cart' />
      //   </Button>
      // </Right>
      <HeaderRight onSearch={() => Actions.search()} onCart={() => Actions.cart()} />
    );

    return (
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
        <Container style={{ backgroundColor: '#fdfdfd' }}>
          <Navbar left={left} right={right} title={this.props.title} />
          <Content padder>
            {this.renderProducts()}
          </Content>
        </Container>
      </SideMenuDrawer>
    );
  }

  renderProducts() {
    let items = [];
    let stateItems = this.state.items
    for (var i = 0; i < stateItems.length; i += 2) {
      if (stateItems[i + 1]) {
        items.push(
          <Card key={i}>
            <Product key={stateItems[i].id} product={stateItems[i]} />
            <Product key={stateItems[i + 1].id} product={stateItems[i + 1]} isRight />
          </Card>
        );
      }
      else {
        items.push(
          <Card key={i}>
            <Product key={stateItems[i].id} product={stateItems[i]} />
            <Col key={i + 1} />
          </Card>
        );
      }
    }
    return items;
  }
}
