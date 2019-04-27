import React from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class HomeScreen extends React.Component {

  showMoreApp = () => {
    const { navigation } = this.props;
    navigation.navigate('Category');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    const { navigation } = this.props;
    navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the jugnle bro</Text>
        <Button onPress={this.showMoreApp} title="check my pleasure !" />
      </View>
    );
  }
  
}
