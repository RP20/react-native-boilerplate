import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Alert
 } from 'react-native';

import { Actions } from 'react-native-router-flux';
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
  Spinner,
  Form,
  Item,
  Label,
  Input,
  Button
} from 'native-base';
import RenderIf from 'render-if';
import Firebase from 'firebase';
//let app = new Firebase("https://clever-bit-128009.firebaseio.com/");

//import Button from '../button';

export default class Login extends Component {

  constructor(props){
   super(props);
   this.state = {
     loaded: true,
     email: '',
     password: ''
   };
 }

   login() {
     this.setState({
       'email': this.state.email,
       'password': this.state.password
     });

    alert("Login with: " + this.state.email + this.state.password);
  }

  goToSignUp() {
    Actions.signup();
  }



  render() {
    return (
      <Container>
          <Content>
              <Form style={{marginTop: 100}}>
                  <Item floatingLabel>
                      <Input placeholder={"Email Address"}
                          onChangeText={(text) => this.setState({email: text})}
                          value={this.state.email}
                      />
                  </Item>
                  <Item floatingLabel last>
                      <Input placeholder={"Password"}
                          onChangeText={(text) => this.setState({password: text})}
                          value={this.state.password}
                          secureTextEntry={true}
                      />
                  </Item>
                  <Button primary onPress={()=>this.login()} style={{alignSelf: 'center', marginTop: 30}}>
                          <Text> Log In </Text>
                  </Button>
                  <Button info onPress={()=>this.goToSignUp()} style={{alignSelf: 'center', marginTop: 80}}>
                          <Text> Register for account? </Text>
                  </Button>
              </Form>
          </Content>
      </Container>
    );
  }
}

module.export = Login;
