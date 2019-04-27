import React from "react";
import { Text, AsyncStorage, StyleSheet, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Input } from "react-native-elements";


export default class SignInScreen extends React.Component {
  // onPress={this.signInAsync}

  signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    const { navigation } = this.props;
    navigation.navigate("App");
  };

  render() {
    return (
      <Grid>
        <Row size={35} style={loginStyle.blackBG}>
          <Col size={1}>
            <View style={{ alignItems: "center" }}>
              <Text style={loginStyle.text}>hello there</Text>
            </View>
          </Col>
        </Row>
        <Row size={65} style={loginStyle.redBG}>
          <Col size={50}>
            <Input
              placeholder="lol"
            />
          </Col>
          <Col size={50}>
            <Input
              placeholder="password"
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

const loginStyle = StyleSheet.create({
  blackBG: {
    backgroundColor: "#999"
  },
  redBG: {
    backgroundColor: "red"
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: 50
  }
});
