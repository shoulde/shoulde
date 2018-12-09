import React from "react";
import { Text, AsyncStorage } from "react-native";
import { Container, Content, Form, Item, Input, Button } from "native-base";


export default class SignInScreen extends React.Component {
  signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    const { navigation } = this.props;
    navigation.navigate("App");
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
          <Button rounded success onPress={this.signInAsync}>
            <Text>Log in</Text>
          </Button>
          <Button rounded info>
            <Text>SIgn in</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
