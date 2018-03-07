import React from 'react';
import { TextInput, AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    name:''
  };

  nameChangeHandler = event => {
    alert(event);
    // this.setState();
  };


  render() {
    return (
      <View style={{backgroundColor:'red'}}>
        <Text>#100DaysOfCode</Text>
        <TextInput
        style={{ backgroundColor: '#ededed', height: 60 }}
        value={this.state.name}
        onChangeText={this.nameChangeHandler}
        />
        <Text>This is my second React Native mobile app.</Text>
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
