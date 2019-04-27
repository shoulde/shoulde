import React from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class ProfilScreen extends React.Component {

  signOutAsync = async () => {
    await AsyncStorage.clear();
    const { navigation } = this.props;
    navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Actually, sign me out :)" onPress={this.signOutAsync} />
      </View>
    );
  }
}
