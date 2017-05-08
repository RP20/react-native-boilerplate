import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { Content, Card, CardItem, Body, Left, Thumbnail, Button, Icon, View, Spinner } from 'native-base';
import TimeAgo from 'react-native-timeago';
import FitImage from 'react-native-fit-image';
import { hello, GetImage, ContentSnippet } from '../../helpers/helpers';
import AppHeader from '../appHeader';
import RenderIf from 'render-if';


export default class FeedData extends Component {

  constructor() {
    super();
    this.state = {
      showLoader: true,
      showFeedData: false,
    }
  }

  setTimeInterval() {
    setTimeout(() => {
      this.setState({
        showLoader: false,
        showFeedData: true
      });
    }, 1000);
  }

  componentDidMount() {
      this.setTimeInterval();
  }

  render(){

    let articles = this.props.data.map(function(articleData, index) {
        return (
          <Card key={articleData.published.$t}>
                <CardItem>
                <Left>
                    <Thumbnail source={require('../../img/logo.png')}/>
                    <Body>
                        <Text>{articleData.title.$t}</Text>
                    </Body>
                </Left>
                </CardItem>
                <CardItem cardBody>
                  <View
                      style={{
                      flexDirection: "row",
                      flex: 1
                  }}>
                    <FitImage source={{uri: GetImage(articleData.content.$t)}} />
                  </View>
                </CardItem>
                <CardItem content>
                    <HTMLView value = {ContentSnippet(articleData.content.$t)} />
                </CardItem>
                <CardItem>
                  <Button transparent>
                      <Icon active name="time" />
                      <Text><TimeAgo time ={articleData.published.$t} /></Text>
                  </Button>
                  <Button transparent>
                      <Icon active name="chatbubbles" />
                      <Text>{articleData.thr$total.$t} Comments</Text>
                  </Button>
                </CardItem>
            </Card>
        )
    });

    return (
      <Content>
          <AppHeader/>
          {RenderIf(this.state.showLoader)(
            <Spinner color='skyblue' style={{marginTop: 100}}/>
          )}
          {RenderIf(this.state.showFeedData)(
            <Content>{articles}</Content>
          )}

      </Content>

    );
  }
}

module.export = FeedData;
