import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Content } from 'native-base';
import CardShow from '../components/CardShow'

export default class FoodScreen extends React.Component {
    render(){
        return (
            <Container>
                <Header searchBar rounded>
                
                    <Item>
                        <Icon name="ios-search" />
                        
                        <Input placeholder="Food for You" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                
                </Header>

                <Content>
                    <CardShow navigation={this.props.navigation} name="Pooja Bhatt" place="Kabra Nagar, Nanded" />
                    <CardShow navigation={this.props.navigation} name="Shraddha B" place="Vijay Colony, Nanded" />
                    <CardShow navigation={this.props.navigation} name="Swagati Bharde" place="Yeshwant Nagar, Nanded" />
                    <CardShow navigation={this.props.navigation} name="Aditi Jadhav" place="Chaitanya Nagar, Nanded" />
                </Content>
            </Container>

        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
})