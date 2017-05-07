import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, StyleProvider } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';
import getTheme from './src/themes/components';
import commonColor from './src/themes/variables/commonColor';
//import material from './native-base-theme/variables/material';

import AppHeader from './src/components/appHeader';
import AppFooter from './src/components/appFooter';
import AppBody from './src/components/appBody';

import News from './src/components/pages/news';
import About from './src/components/pages/about';

export default class MyProject extends Component {

  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
      <Container>

        <Router>
          <Scene key="feed" component={AppBody} title='Feed'/>
          <Scene key="news" component={News} title='News'/>
          <Scene key="about" component={About} title='About'/>
        </Router>

        <AppFooter />
      </Container>
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('MyProject', () => MyProject);
