import React from 'react';
import {
    AsyncStorage,
    Button,
    StyleSheet,
    View,
  } from 'react-native';

export default class ProfilScreen extends React.Component {

  
    render() {
      return (
        <View style={styles.container}>
          <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        </View>
      );
    }
  
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