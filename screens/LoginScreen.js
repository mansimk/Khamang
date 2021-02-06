import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Body, Title, Button, Left, Icon, Right, Text, Input, Label } from 'native-base';


export default class LoginScreen extends Component {

  render() {
    // const { navigate } = this.props.navigation;

    return (
      <Container>
        {/* <Header>
            <Body>
                <Title>Log In</Title>
            </Body>
        </Header> */}
        <Content padder>
          <Text style={{fontWeight:'bold', fontSize:40, textAlign:'center', marginTop:90, fontStyle:'italic', color:'orange'}}>
            Welcome to Khamang!
          </Text>
          <Form style={{marginTop:80}}>
            <Item rounded >
              <Label />
              <Input placeholder="Username" placeholderTextColor="grey" />
            </Item>
            <Item rounded style={{marginTop:10}}>
              <Label />
              <Input placeholder="Password" placeholderTextColor="grey" secureTextEntry={true}/>
            </Item>
          </Form>

          <Button block onPress={()=>this.props.navigation.navigate('FootTab')} style={{margin:10, marginTop:60}}>
                <Text>Log In</Text>
            </Button>
            <Button block onPress={()=>this.props.navigation.navigate('MFootTab')} style={{margin:10, marginTop:10}}>
                <Text>Log In as HomeMaker</Text>
            </Button>
       
            <Button block onPress={()=>this.props.navigation.navigate('Register')} style={{margin:10}} >
                <Text>Register</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}