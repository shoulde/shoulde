import React from "react";
import {Text, AsyncStorage} from "react-native";
import {Col, Row, Grid} from "react-native-easy-grid";
import {Input, Button} from 'react-native-elements';

export default class SignInScreen extends React.Component {
    //onPress={this.signInAsync}
    signInAsync = async() => {
        await AsyncStorage.setItem("userToken", "abc");
        const {navigation} = this.props;
        navigation.navigate("App");
    };

    render() {
        return (
            <Grid>
                <Row size={10}/>
                <Row size={30}>
                    <Row size={10} >
                        <Input placeholder='user'/>
                    </Row>
                    <Row size={10}>
                        <Input placeholder='password'/>
                    </Row>
                    
                </Row>
                <Button title='connect' onPress={this.signInAsync}/>
                <Row/>
            </Grid>
        );
    }
}
