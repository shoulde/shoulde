import React from 'react';
import {
    AsyncStorage,
    Button,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

export default class HomeScreen extends React.Component {
    
    render() {
      return (
        <View style={styles.container}>
          <Text>Welcome to the jugnle bro</Text>
          <Button onPress={this._showMoreApp} title="check my pleasure !"></Button>
        </View>
      );
    }
  
    _showMoreApp = () => {
      this.props.navigation.navigate('Category');
    };
  
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });