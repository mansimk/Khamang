import React, { Component } from 'react';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';
export default class tabOne extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Paratha and Curry</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Dal and Rice</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Sweet</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}