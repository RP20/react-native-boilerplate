import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, StyleProvider } from 'native-base';
import getTheme from './src/themes/components';
import commonColor from './src/themes/variables/commonColor';
//import material from './native-base-theme/variables/material';

import AppHeader from './src/components/appHeader';
import AppFooter from './src/components/appFooter';
import AppBody from './src/components/appBody';

export default class MyProject extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
      <Container>
        <AppHeader />
        <AppBody />
        <AppFooter />
      </Container>
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('MyProject', () => MyProject);
