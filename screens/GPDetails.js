import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Accordion, Icon, Left, Body , headerIconStyle, Right, ActionSheet} from 'native-base';

const dataArray = [
    { title: "Personal Details", content: "Age: 68" },
    { title: "Medical History", content: "Diseases: Diabetes, Sleeplessness" },
    { title: "Family Background", content: "Native Village: Kolhapur" }
  ];

export default class GPDetails extends Component {



    _renderHeader(item, expanded) {
        return (
          <View style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
            alignItems: "center" ,
            backgroundColor: "#A9DAD6" }}>
          <Text style={{ fontWeight: "600" }}>
              {" "}{item.title}
            </Text>
            {expanded
              ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
              : <Icon style={{ fontSize: 18 }} name="add-circle" />}
          </View>
        );
      }
      _renderContent(item) {
        return (
          <Text
            style={{
              backgroundColor: "#e3f1f1",
              padding: 10,
              fontStyle: "italic",
            }}
          >
            {item.content}
          </Text>
        );
      }



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
                  <Text>Kumar Pratik</Text>
                  <Icon name="pin" style={{ fontSize: 15 , color:'grey'}}>
                  <Text note> Stays nearest</Text>
                  </Icon>
                </Body>
              </Left>
              <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSOixhzDzLdLczBe4kpp0PY8CDeJ-TkU1U2DTwq3evD47rNbOk' }}  style={{height: 100, width: 10, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Button rounded textStyle={{color: '#87838B' }}>
                  <Icon name="bookmark" >
                  <Text style={{ color:'white' }}>    Book Slot   </Text>
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
                
                
                {/* <FeatureSlider /> */}
                <Content padder style={{ backgroundColor: "white" }}>
                    <Accordion
                        width={300}
                        dataArray={dataArray}
                        animation={true}
                        expanded={true}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                    />
                </Content>

              </Body>
            </CardItem>
            <CardItem>
              <Left />
              <Body>
                <Icon name="ios-arrow-down"></Icon>
              </Body>
              {/* <Right>
                <Button style={{width:100}} bordered textStyle={{color: '#87838B'}}>
                  <Text>Reviews</Text>
                </Button>
              </Right> */}
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}