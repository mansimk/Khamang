import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import FoodScreen from '../tabscreens/FoodScreen';
import DietScreen from '../tabscreens/DietScreen';
import MyOrdersScreen from '../tabscreens/MyOrdersScreen';
import ProfileScreen from '../tabscreens/ProfileScreen';
import screen from 'react-native'

BTabNavigator = createBottomTabNavigator(
  {
    Food: { screen: FoodScreen },
    Diet: { screen: DietScreen },
    Orders: { screen: MyOrdersScreen },
    Profile:  { screen: ProfileScreen}
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab style={{position:'absolute',bottom: 0, top: 0, width: '100%', height: screen.height, minHeight: screen.height}}  >
            <Button
              vertical
              active={props.navigation.state.index === 0}
              onPress={() => props.navigation.navigate("Food")}>
              <Icon name="ios-nutrition" />
              <Text>Food</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 1}
              onPress={() => props.navigation.navigate("Diet")}>
              <Icon name="fitness" />
              <Text>Diet</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 2}
              onPress={() => props.navigation.navigate("Orders")}>
              <Icon name="filing" />
              <Text>My Orders</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 3}
              onPress={() => props.navigation.navigate("Profile")}>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);

export default createAppContainer(BTabNavigator)