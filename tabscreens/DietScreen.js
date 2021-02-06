import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Content, Container, Header, Tab, Tabs, ScrollableTab, Button, Icon, Title, Right, Left, Body, Text } from 'native-base';
import TabC from '../components/tabOne'

export default class DietScreen extends React.Component {
    render(){
        return (
        <Container>
        <Header>       
                <Body>
                    <Text style={{fontWeight:'bold',paddingLeft:20,color:'white', fontSize:20}}>
                        Daily Diet
                    </Text>
                </Body>
                <Right />
            </Header>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Breakfast">
            <TabC />
          </Tab>
          <Tab heading="Lunch">
            <TabC />
          </Tab>
          <Tab heading="Dinner">
            <TabC />
          </Tab>
        </Tabs>
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