import React from 'react';
import Main from './src/Main';
import Expo from 'expo';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
	}

	UNSAFE_componentWillMount() {
		Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
		});
		this.setState({ loading: false });
	}

	render() {
		if (this.state.loading) {
			return (
				<AppLoading
					startAsync={this._cacheResourcesAsync}
					onFinish={() => this.setState({ isReady: true })}
					onError={console.warn}
				/>
			);
		}
		return (
			<Main></Main>
		);
	}
}