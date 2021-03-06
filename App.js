import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

class HelloIB extends React.Component {
  render(){
    return (
        <Text style={styles.hello}>{this.props.hello}</Text>
        );
  }
}

class AckIB extends React.Component {
  render(){
    return (
        <Text style={styles.answer}>{this.props.answer}</Text>
        )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('./img/pics-01.png')}
          style={{width: 300}}
        />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Hello world.</Text>
        <View>
        <HelloIB hello="To be..." style={styles.hello}/>
        </View>
        <View>
        <AckIB answer="Or not to be" style={styles.answer}/>
        </View>
        <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0d723',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    backgroundColor: '#0f0',
    textAlign: 'left',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  answer: {
    backgroundColor: '#ff0',
    textAlign: 'right',
    color: 'red',
  }
});
