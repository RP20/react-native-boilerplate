import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, ListItem, Text, CheckBox, Header, Left, Button, Title, Body, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class AppHeader extends Component {
  render() {
    return (
        <Header>
            <Left>
                <Button transparent>
                    <Icon name='menu' onPress={()=>Actions.signup()}/>
                </Button>
            </Left>
            <Body>
                <Image source={require('../img/rn.png')} style={{width: 170, height: 30}} />
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='person' onPress={()=>Actions.about()}/>
                </Button>
            </Right>
        </Header>
    );
  }
}

module.export = AppHeader;
