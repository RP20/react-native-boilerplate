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
//import Firebase from 'firebase';
import Login from './login';
import { firebaseRef } from '../../services/firebase';

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
        firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
         // Handle Errors here.
         console.log(error.code);
         console.log(error.message);
         console.log("Register with: " +this.state.email + this.state.password);
         // ...
        });
    //  this.setState({
    //    'email': this.state.email,
    //    'password': this.state.password
    //  });
    //
    // alert("Register with: " +this.state.email + this.state.password);
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
                          <Text style={{color: 'white'}}> Signup </Text>
                  </Button>
                  <Button info onPress={()=>this.goToLogin()} style={{alignSelf: 'center', marginTop: 80}}>
                          <Text style={{color: 'white'}}> Got an Account? </Text>
                  </Button>
              </Form>
          </Content>
      </Container>
    );
  }
}

module.export = SignUp;
