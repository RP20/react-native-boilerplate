import React, { Component } from 'react';
import { Text } from 'react-native';
import FeedData from './feedData';
import {
  Container,
  Content,
  Icon,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Spinner
} from 'native-base';
import RenderIf from 'render-if';

export default class Feed extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  getData() {
    fetch('https://www.thewallscript.com/blogfeed/blog.json', {method: 'GET'}).then((response) => response.json()).then((responseJson) => {
      this.setState({data: responseJson.feed.entry});
    }).catch((error) => {
      console.error(error);
    });
  }

  componentDidMount() {
      this.getData();
  }

  render() {
    return (
      <Container>
        <Content>
          <FeedData data={this.state.data}/>
        </Content>
      </Container>
    );
  }
}

module.export = Feed;
