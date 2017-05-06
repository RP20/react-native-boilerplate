import React, { Component } from 'react';
import { Text } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { Content, Card, CardItem, Body, Left, Thumbnail, Button, Icon } from 'native-base';

export default class AppBodyData extends Component {
  render(){

    let articles = this.props.data.map(function(articleData, index) {
        return (
          <Card key={index}>
                <CardItem>
                <Left>
                    <Thumbnail source={require('../img/logo.png')}/>
                    <Body>
                        <Text>{articleData.title.$t}</Text>
                    </Body>
                </Left>
                </CardItem>
                <CardItem content>
                    <HTMLView value = {articleData.content.$t} />
                </CardItem>
                <CardItem>
                  <Button transparent>
                      <Icon active name="time" />
                      <Text>{articleData.published.$t}</Text>
                  </Button>
                  <Button transparent>
                      <Icon active name="chatbubbles" />
                      <Text>{articleData.thr$total.$t} Comments</Text>
                  </Button>
                </CardItem>
            </Card>
        )
    });

    return (
      <Content>
          {articles}
        </Content>
    );
  }
}

module.export = AppBodyData;
