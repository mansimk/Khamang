import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Right, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';


class CardShow extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={{padding:10,height:430}}>
        <Content>
          <Card style={{flex: 1, flexDirection:"column"}}>
            <TouchableNativeFeedback onPress={(navigation)=>{
                  navigate({routeName:'MakerDe'},
                  // {restaurant: props.restaurant}
                  )
                }}>
                <CardItem>
                <Left>
                    <Thumbnail source={{uri: 'https://image.shutterstock.com/image-vector/smiling-girl-avatar-cute-woman-260nw-1018322197.jpg'}} />
                    <Body>
                    <Text>{this.props.name}</Text>
                    <Text note>{this.props.place}</Text>
                    </Body>
                </Left>
                </CardItem>
                <CardItem>
                <Body>
                    <Image source={{uri: 'http://www.savlas.com/wp-content/uploads/2017/03/savlas-home-food-hyderabad-2.jpg'}} style={{height: 200, width: 320, flex: 1}}/>
                    <Icon name='ios-radio-button-on' style={{fontSize:15, paddingTop:6, color:'green'}}>
                    <Text note numberOfLines={1} style= {{color:'green'}}> Vegeterian    </Text>
                    
                    <Icon name='ios-radio-button-on' style={{fontSize:15, color:'red'}}>
                    <Text note numberOfLines={1} style= {{color:'red'}}> Non-Vegeterian</Text>
                    </Icon>
                    </Icon> 
                </Body>
                </CardItem>
            </TouchableNativeFeedback>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text style={{fontSize:18}}>Rating</Text>
                  <Icon name="star" style={{color:'#fcba03',fontSize:20}} />
                  <Icon name="star" style={{color:'#fcba03',fontSize:20}} />
                  <Icon name="star" style={{color:'#fcba03',fontSize:20}} />
                  <Icon name="star-half" style={{color:'#fcba03',fontSize:20}} />
                  <Icon name="star-outline" style={{color:'#fcba03',fontSize:20}} />
                  
                </Button>
              </Left>
              <Right>
                <Button bordered info onPress={()=>{
                  navigate({routeName:'MakerDe'},
                  // {restaurant: props.restaurant}
                  )
                }}>
                  <Text>See More</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(CardShow)