import React, { Component } from 'react';
import {Text} from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class AppFooter extends Component {

  tabAction(tab) {
    if(tab == 'feed'){
      Actions.feed();
    } else if(tab == 'news'){
      Actions.news();
    } else {
      Actions.about();
    }
  }
  render() {
    return (
      <Footer>
          <FooterTab>
              <Button active onPress={()=>{this.tabAction('feed')}}>
                  <Icon active name="apps" />
              </Button>
              <Button onPress={()=>{this.tabAction('news')}}>
                  <Icon name="paper" />
              </Button>
              <Button onPress={()=>{this.tabAction('about')}}>
                  <Icon name="navigate" />
              </Button>
          </FooterTab>
      </Footer>
    );
  }
}

module.export = AppFooter;
