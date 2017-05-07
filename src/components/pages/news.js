import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, ListItem, Text, CheckBox, Header, Left, Button, Title, Body, Right, Icon } from 'native-base';

export default class News extends Component {
  render() {
    return (
        <Content style={{marginTop: 75}}>
          <Text> News page </Text>
        </Content>
    );
  }
}

module.export = News;
