"use strict";

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    TextInput,
    View
} from 'react-native';

import {constants} from "../../network/constants";

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{margin: 16}}>手机号</Text>

                <View style={styles.textInput}>
                    <Image
                        source={require('../img/my_phone.png')}
                        style={styles.icon}/>

                    <TextInput style={{flex: 1, marginLeft: 8}}
                               editable={true}
                               placeholderTextColor={'#999999'}
                               placeholder={'请输入手机号'}
                               underlineColorAndroid={'transparent'}
                               keyboardType={'phone-pad'}
                    />
                </View>

                <Text style={{margin: 16}}>短信验证码</Text>

                <View style={styles.textInput}>
                    <Image
                        source={require('../img/my_code.png')}
                        style={styles.icon}/>

                    <TextInput style={{flex: 1, marginLeft: 8}}
                               editable={true}
                               placeholderTextColor={'#999999'}
                               placeholder={'请输入验证码'}
                               underlineColorAndroid={'transparent'}
                               keyboardType={'phone-pad'}
                    />
                </View>

                <Text style={styles.button}>绑定手机</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    icon: {
        height: 20,
        width: 20
    },
    textInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 16,
        borderColor: '#CED0CE',
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 8,
        paddingRight: 8,
    },
    button: {
        marginTop: 48,
        color: 'white',
        backgroundColor: constants.baseColor,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 48,
        paddingRight: 48,
        marginLeft: 16,
        marginRight: 16,
        alignSelf: 'center',
        borderRadius: 4
    }

});
