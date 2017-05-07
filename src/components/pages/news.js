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
import {AppFooter} from '../appFooter';
import NewsData from './newsData';

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
    super()
    this.state = {
      data: []
    }
  }

  getData() {
    fetch('https://www.thewallscript.com/blogfeed/javascript/10', {method: 'GET'}).then((response) => response.json()).then((responseJson) => {
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
      <NewsData data = {this.state.data} />
    );
  }

}

module.export = News;
