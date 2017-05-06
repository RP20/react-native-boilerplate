import React, { Component } from 'react';
import {} from 'react-native';
import { Content, Card, CardItem, Body, Text } from 'native-base';

export default class AppBody extends Component {
  render() {
    return (
      <Content>
      <Card>
                  <CardItem>
                      <Body>
                        <Text>
                            My Project Text Card 1
                        </Text>
                      </Body>
                    </CardItem>
          </Card>
        </Content>
    );
  }
}


module.export = AppBody;
