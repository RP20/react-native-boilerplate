import React, { Component } from 'react';
import {Text} from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

export default class AppFooter extends Component {
  render() {
    return (
      <Footer >
          <FooterTab>
              <Button active>
                  <Icon active name="apps" />
              </Button>
              <Button>
                  <Icon name="camera" />
              </Button>
              <Button>
                  <Icon name="navigate" />
              </Button>
          </FooterTab>
      </Footer>
    );
  }
}

module.export = AppFooter;
