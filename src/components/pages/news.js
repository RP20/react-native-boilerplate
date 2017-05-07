import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {
  Container,
  Content,
  Icon,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body
} from 'native-base';
import {AppFooter} from '../appFooter'

const cards = [
  {
    text: 'title',
    name: 'title',

  },
  {
    text: 'title',
    name: 'title',

  },
  {
    text: 'title',
    name: 'title',

  }
];

export default class News extends Component {

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
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item => <Card style={{
            elevation: 3
          }}>
            <CardItem>
              <Left>
                <Thumbnail source={item.image}/>
                <Body>
                  <Text>{item.text}</Text>
                  <Text note>NativeBase</Text>
                </Body>
              </Left>
            </CardItem>
            

          </Card>}/>
        </View>
      </Content>

    );
  }
}

module.export = News;
