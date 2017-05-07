import React, {Component} from 'react';
import {Text} from 'react-native';
import {Container, Content, Card, CardItem, Icon, Right} from 'native-base';

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      active: true
    };
  }
  render() {

    return (
      <Content style={{
        marginTop: 75
      }}>
        <Card>
          <CardItem>
            <Icon active name="logo-googleplus"/>
            <Text>Google +</Text>
            <Right>
              <Icon name="arrow-forward"/>
            </Right>
          </CardItem>

          <CardItem>
            <Icon active name="logo-facebook"/>
            <Text>Facebook</Text>
            <Right>
              <Icon name="arrow-forward"/>
            </Right>
          </CardItem>

          <CardItem>
            <Icon active name="logo-twitter"/>
            <Text>@Twitter</Text>
            <Right>
              <Icon name="arrow-forward"/>
            </Right>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

module.export = About;
