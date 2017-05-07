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
import Login from './login';
//let app = new Firebase("https://clever-bit-128009.firebaseio.com/");

//import Button from '../button';

export default class SignUp extends Component {

  constructor(props){
   super(props);
   this.state = {
     loaded: true,
     email: '',
     password: ''
   };
 }

   signup() {
     this.setState({
       'email': this.state.email,
       'password': this.state.password
     });

    alert("Register with: " +this.state.email + this.state.password);
  }

  goToLogin() {
    Actions.login();
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
                  <Button primary onPress={()=>this.signup()} style={{alignSelf: 'center', marginTop: 30}}>
                          <Text> Log In </Text>
                  </Button>
                  <Button info onPress={()=>this.goToLogin()} style={{alignSelf: 'center', marginTop: 80}}>
                          <Text> Got an Account? </Text>
                  </Button>
              </Form>
          </Content>
      </Container>
    );
  }
}

module.export = SignUp;
