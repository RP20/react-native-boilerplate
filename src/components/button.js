import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
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

export default class button extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  getData() {
    // fetch('https://www.thewallscript.com/blogfeed/blog.json', {method: 'GET'}).then((response) => response.json()).then((responseJson) => {
    //   this.setState({data: responseJson.feed.entry});
    // }).catch((error) => {
    //   console.error(error);
    // });
  }

  componentDidMount() {
      this.getData();
  }

  render() {
    return (
      <View>
        <TouchableHighlight underlayColor={"#E8E8E8"} onPress={this.props.onpress} style={this.props.button_styles}>
          <View>
              <Text style={this.props.button_text_styles}>{this.props.text}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

module.export = button;
