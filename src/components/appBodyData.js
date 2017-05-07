import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { Content, Card, CardItem, Body, Left, Thumbnail, Button, Icon } from 'native-base';
import TimeAgo from 'react-native-timeago';
import { hello, GetImage, ContentSnippet } from '../helpers/helpers';

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
                <CardItem>
                  <Image source={{uri: GetImage(articleData.content.$t)}}
                  style={{width: 350, height: 200}} />
                </CardItem>
                <CardItem content>
                    <HTMLView value = {ContentSnippet(articleData.content.$t)} />
                </CardItem>
                <CardItem>
                  <Button transparent>
                      <Icon active name="time" />
                      <Text><TimeAgo time ={articleData.published.$t} /></Text>
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
