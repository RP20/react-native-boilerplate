import React, { Component } from 'react';
import {Text} from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class AppFooter extends Component {

  constructor(){
    super();
    this.state={
      activeTabName: 'feed'
    }
  }

  tabAction(tab) {
    this.setState({activeTabName: tab})
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
              <Button active={(this.state.activeTabName==='feed') ? true: "" } onPress={()=>{this.tabAction('feed')}}>
                  <Icon active name="apps" />
              </Button>
              <Button active={(this.state.activeTabName==='news') ? true: "" } onPress={()=>{this.tabAction('news')}}>
                  <Icon name="paper" />
              </Button>
              <Button active={(this.state.activeTabName==='about') ? true: "" } onPress={()=>{this.tabAction('about')}}>
                  <Icon name="navigate" />
              </Button>
          </FooterTab>
      </Footer>
    );
  }
}

module.exports = AppFooter;
