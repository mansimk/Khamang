import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body , headerIconStyle, Right, ActionSheet} from 'native-base';
import FeatureSlider from '../components/FeatureSlider'

export default class CrecheDetails extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent >
              <Icon name='arrow-back' onPress={() => this.props.navigation.goBack()}/>
            </Button>
          </Left>
          <Body />
          <Right />
        </Header>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>Nursary Shine</Text>
                  <Icon name="pin" style={{ fontSize: 15 , color:'grey'}}>
                  <Text note> Shivaji Nagar</Text>
                  </Icon>
                </Body>
              </Left>
              <Thumbnail source={{uri: 'https://i.ya-webdesign.com/images/alphabet-icon-png-4.png' }}  style={{height: 100, width: 10, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Button rounded textStyle={{color: '#87838B' }}>
                  <Icon name="bookmark" >
                  <Text style={{ color:'white' }}>    Book   </Text>
                  </Icon>
                </Button>
              </Left>
              <Button rounded textStyle={{color: '#87838B' }}>
                  <Icon name="ios-text">
                  <Text style={{ color:'white' }}>   Message   </Text>
                  </Icon>
                </Button>
            </CardItem>
            <CardItem>
              <Body>
                <FeatureSlider />
              {/* <View style={{flex:1, flexDirection:'row',flexGrow:1 }}>
                <Image source={{uri: ''}} style={{height: 200, width: 200, flex: 1}}/>
                
                <Image source={{uri: ''}} style={{height: 200, width: 200, flex: 2 }}/>
                
                <Image source={{uri: ''}} style={{height: 200, width: 200, flex: 2 }}/>
                
                <Image source={{uri: ''}} style={{height: 200, width: 200, flex: 2 }}/>
              </View> */}
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}