import React, { Component } from 'react';
import { Text } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { Content, Card, CardItem, Body, Left, Thumbnail } from 'native-base';

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
