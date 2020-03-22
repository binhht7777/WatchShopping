import React, { Component } from 'react'
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

var tabOption = ({

   // title: 'Details',
   headerStyle: {
      backgroundColor: '#f4511e',
   },
   //headerShown: false,
   headerTintColor: '#fff',
   headerTitleStyle: {
      fontWeight: 'bold',
   },

})

function DetailsScreen() {
   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Details!</Text>
      </View>
   );
}

function HomeScreen({ navigation }) {
   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Home screen</Text>
         <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
         />
      </View>
   );
}

function SettingsScreen({ navigation }) {
   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Settings screen</Text>
         <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
         />
      </View>
   );
}

function ProductScreen({ navigation }) {
   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Settings screen</Text>
         <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
         />
      </View>
   );
}


const HomeStack = createStackNavigator();


function HomeStackScreen() {
   return (
      <HomeStack.Navigator screenOptions={tabOption}>
         <HomeStack.Screen name="Home" component={HomeScreen} component={SettingsScreen} />
         <HomeStack.Screen name="Details" component={DetailsScreen} />
      </HomeStack.Navigator>
   );
}



const ProductStack = createStackNavigator();


function ProductStackScreen() {
   return (
      <ProductStack.Navigator screenOptions={tabOption}>
         <ProductStack.Screen name="Product" component={ProductScreen} />
         <ProductStack.Screen name="Details" component={DetailsScreen} />
      </ProductStack.Navigator>
   );
}



const SettingsStack = createStackNavigator();



function SettingsStackScreen() {

   return (
      <SettingsStack.Navigator screenOptions={{
         // title: 'Details',
         headerStyle: {
            backgroundColor: '#f4511e',
         },
         headerTintColor: '#fff',
         //headerShown: false,
         headerTitleStyle: {
            fontWeight: 'bold',
         },
      }}>
         <SettingsStack.Screen name="Settings" component={SettingsScreen} />
         <SettingsStack.Screen name="Details" component={DetailsScreen} />
      </SettingsStack.Navigator>
   );
}



const Tab = createBottomTabNavigator();

export default class MyTabNavigation extends Component {
   navigationOptions = {

      title: 'Details',
      headerStyle: {
         backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
         fontWeight: 'bold',
      }
   }
   render() {
      return (
         <NavigationContainer>

            <Tab.Navigator screenOptions={({ route }) => ({
               tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                     iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                  } else if (route.name === 'Settings') {
                     iconName = focused ? 'ios-cart' : 'ios-cart';
                  } else if (route.name === 'Product') {
                     iconName = focused ? 'ios-list-box' : 'ios-list';

                  }


                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
               },

            })}
               tabBarOptions={{
                  activeTintColor: 'tomato',
                  inactiveTintColor: 'gray'
               }}
            >
               <Tab.Screen name="Home" component={HomeStackScreen} />
               <Tab.Screen name="Product" component={ProductStackScreen} />
               <Tab.Screen name="Settings" component={SettingsStackScreen} />
            </Tab.Navigator>
         </NavigationContainer>

      )
   }
}
