/**
* This is the Product component
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { View, Col, Card, CardItem, Left, Thumbnail, Button, Body, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Colors from '../Colors';
import Text from './Text';
import { color } from 'react-native-reanimated';


export default class product extends Component {
	render() {
		return (

			// <Col style={this.props.isRight ? style.leftMargin : style.rightMargin}>
			<Card>
				{/* <CardItem>
						<Left>
							<Thumbnail source={{ uri: this.props.product.image }} />
							<Body>
								<Text>NativeBase</Text>
								<Text note>GeekyAnts</Text>
							</Body>
						</Left>
					</CardItem> */}
				<CardItem>
					<Left>
						<Thumbnail source={this.props.product.image} style={{ backgroundColor: "#f2f2f2" }} />
						<Body>
							<CardItem>
								<Left>
									<Text style={{ fontSize: 20, fontWeight: "bold", color: "#404040" }}>{this.props.product.categoryTitle}</Text>
								</Left>
								<Right>
									<Text style={{ fontSize: 20, fontWeight: "bold", color: Colors.Pink59 }}>{this.props.product.price}</Text>
								</Right>
							</CardItem>

							<Text note style={{ color: "gray" }}>{this.props.product.code}</Text>
						</Body>
					</Left>
				</CardItem>

				<CardItem cardBody>
					<Button style={style.button} onPress={() => this.pressed()}>
						<Image source={this.props.product.image} style={style.image} />
						<View style={style.border} />
					</Button>
				</CardItem>

				<CardItem style={{ paddingTop: 0 }}>

					<Button style={{ flex: 1, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, paddingTop: 0 }}
						transparent
						onPress={() => this.pressed()}
					>
						<Body>
							<Text
								style={{
									fontSize: 16, color: "gray", textAlign: "center"
								}}
								numberOfLines={2}
							>{this.props.product.title}</Text>
						</Body>
					</Button>
				</CardItem>
				<CardItem style={{ marginTop: 0 }}>
					<Left>
						<Button transparent>
							<Icon active name="thumbs-up" />
							<Text style={{ color: "gray" }}>12 Likes</Text>
						</Button>
					</Left>
					<Body>
						<Button transparent>
							<Icon active name="chatbubbles" />
							<Text style={{ color: "gray" }}>4 Comments</Text>
						</Button>
					</Body>
					<Right>
						<Button transparent >
							<Text style={{ color: Colors.Pink59, fontWeight: "bold" }}>Add Cart</Text>
						</Button>
					</Right>
				</CardItem>
			</Card>
			// </Col>
		);
	}

	pressed() {
		Actions.product({ product: this.props.product });
	}
}

const style = StyleSheet.create({
	button: { flex: 1, height: 480, paddingLeft: 10, paddingRight: 10, backgroundColor: "#f2f2f2" },
	image: { height: 480, flex: 1, alignSelf: "center" },
	leftMargin: {
		marginLeft: 7,
		marginRight: 0,
		marginBottom: 7
	},
	rightMargin: {
		marginLeft: 0,
		marginRight: 7,
		marginBottom: 7
	},
	border: {
		position: 'absolute',
		top: 10,
		left: 10,
		right: 10,
		bottom: 10,
		borderWidth: 1,
		borderColor: 'rgba(253, 253, 253, 0.2)'
	},
	price: {
		fontSize: 20,
		paddingLeft: 5,
		paddingRight: 5,
		zIndex: 1000,
		backgroundColor: '#fdfdfd',
		color: "gray"


	},
	line: {
		width: '100%',
		height: 1,
		backgroundColor: '#7f8c8d',
		position: 'absolute',
		top: '52%'
	}
});
