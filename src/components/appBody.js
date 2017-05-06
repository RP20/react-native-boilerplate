import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Content } from 'native-base';

export default class AppBody extends Component {
  render() {
    return (
      <Content>
        <Text>
          Body
        </Text>
        </Content>

    );
  }
}

const styles = StyleSheet.create({
  bodyText: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    color: 'red',
    fontSize: 40
  }
});


module.export = AppBody;
