import React from 'react';
import {
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

export default class CategoryScreen extends React.Component {

    static navigationOptions = {
      title: 'choose cat',
    };

    signOutAsync = () => {
      const { navigation } = this.props;
      navigation.goBack();
    }

    render() {
      return (
        <View style={styles.container}>
          <Text>no !</Text>
          <Button title="return" onPress={this.signOutAsync} />
        </View>
      );
    }
}
