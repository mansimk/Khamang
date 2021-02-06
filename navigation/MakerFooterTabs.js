import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Hello from '../components/Hello'
import Feeds from '../makertabscreens/Feeds';
import NewPost from '../makertabscreens/NewPost';
import Recipes from '../makertabscreens/Recipes';
import ProfileScreen from '../tabscreens/ProfileScreen'
import { Button, Text, Icon, Footer, FooterTab, Container, Header, Content } from "native-base";
import screen from 'react-native'



BTabNavigator = createBottomTabNavigator(
  {
    Feeds: { screen: Feeds },
    NewPost: { screen: NewPost },
    Recipes: { screen: Recipes },
    Account:  { screen: ProfileScreen}
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Container>
        {/* <Header /> */}
        <Content />
        <Footer>
          <FooterTab style={{position:'absolute',bottom: 0, top: 0, width: '100%', height: screen.height, minHeight: screen.height}}>
            <Button
            vertical
            active={props.navigation.state.index === 0}
            onPress={() => props.navigation.navigate("Feeds")}
            >
              <Icon name="apps" />
              <Text>Feeds</Text>
            </Button>
            <Button vertical
            active={props.navigation.state.index === 1}
            onPress={() => props.navigation.navigate("NewPost")}>
              <Icon name="camera" />
              <Text>Post</Text>
            </Button>
            <Button vertical
            active={props.navigation.state.index === 2}
            onPress={() => props.navigation.navigate("Recipes")}>
              <Icon active name="navigate" />
              <Text>Recipes</Text>
            </Button>
            <Button vertical
            active={props.navigation.state.index === 3}
            onPress={() => props.navigation.navigate("Account")}>
              <Icon name="person" />
              <Text>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      );
    }
  }
);

export default createAppContainer(BTabNavigator)