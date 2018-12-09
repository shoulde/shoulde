import React from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class CategoryScreen extends React.Component {
  constructor(props) {
    super(props);
  }

    static navigationOptions = {
      title: 'choose cat',
    };

    _signOutAsync = () => {
      this.props.navigation.goBack();
    }

    render() {
      return (
        <View style={styles.container}>
          <Text>no !</Text>
          <Button title="return" onPress={this._signOutAsync} />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
