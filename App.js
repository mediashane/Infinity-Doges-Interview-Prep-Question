import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';
import { Card, Button } from 'react-native-elements';
import _ from 'lodash';

export default class App extends React.Component {

  state = {
    doggieURL: '',
    response: [],
  }

  grabDoggiePic = async () => {
      try {
      const doggieData = await axios.get('https://dog.ceo/api/breeds/image/random');
      console.log(doggieData);
      const doggieURL = doggieData.data.message;
      console.log('URL', doggieURL);
      this.setState({ doggieURL });
      console.log(this.state.doggieURL);
    } catch(e){
      console.log(e);
    }
  }

  componentWillMount() {
    this.grabDoggiePic();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 200, height: 200, borderRadius: 50 }}
          source={{uri: `${this.state.doggieURL}`}}
        />
        <Button title="Load More!" buttonStyle={{margin: 20}} onPress={() => this.grabDoggiePic()}>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
