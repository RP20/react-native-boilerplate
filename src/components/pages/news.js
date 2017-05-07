import React, {Component} from 'react';
import {Text, View, Image, ActivityIndicator, StyleSheet} from 'react-native';
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
import {AppFooter} from '../appFooter';
import NewsData from './newsData';
import TimerMixin from 'react-timer-mixin';
import RenderIf from 'render-if';

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      showLoader: true,
      showNewsData: false
    }
  }

  getData() {
    fetch('https://www.thewallscript.com/blogfeed/javascript/10', {method: 'GET'}).then((response) => response.json()).then((responseJson) => {
      this.setState({data: responseJson.feed.entry});
    }).catch((error) => {
      console.error(error);
    });
  }

  setTimeInterval() {
    setTimeout(() => {
      this.setState({
        showLoader: false,
        showNewsData: true
      });
    }, 3000);
  }

  componentDidMount() {
      this.getData();
      this.setTimeInterval();
  }

  render() {
    return (
        <Container>
          <Content>
              {RenderIf(this.state.showLoader)(
                <Spinner style={{marginTop: 200}}/>
              )}
              {RenderIf(this.state.showNewsData)(
                <NewsData data={this.state.data}/>
              )}
          </Content>
        </Container>
    );
  }

}

module.export = News;
