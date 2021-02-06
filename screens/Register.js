import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Icon ,DatePicker } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from '../screens/LoginScreen'

export default class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
      }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }
  render() {
    return (
        <Container>
        {/* <Header /> */}
        <Content>
        <Text style={{fontWeight:'bold', fontSize:30, textAlign:'center', marginTop:90, color:'#f7665c'}}>
            Create New Account
          </Text>
          <Form>
            <Item rounded style={{marginTop:20}}>
              <Label>   First Name </Label>
              <Input />
            </Item>

            <Item rounded style={{marginTop:20}}>
              <Label>   Last Name </Label>
              <Input />
            </Item>

            <Item rounded style={{marginTop:20}}>
              <Label>   E-mail </Label>
              <Input />
            </Item>

            <Item rounded style={{marginTop:20}}>
              <Label>   Address </Label>
              <Input />
            </Item>

            <Item rounded style={{marginTop:20}}>
              <Label>   Date of Birth </Label>
              <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>
            </Item>

            <Item rounded style={{marginTop:20}}>
              <Label>   Your Role </Label>
              <Input placeholder= 'HouseWife / Student' placeholderTextColor= 'Grey' />
            </Item>

            <Item rounded style={{marginTop:20, marginBottom:20}}>
              <Label> About Me </Label>
              <Input />
            </Item>

            <Button rounded onPress={()=>{
                            this.props.navigation.navigate({routeName:'Home'})
                        }} style={{marginLeft:140,width:100,marginTop:10}} >
                <Text style={{paddingLeft:20, fontSize:16 , color:'white', fontWeight:'bold'}}>Register</Text>
            </Button>

          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});