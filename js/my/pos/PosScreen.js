"use strict";

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

import {constants} from "../../network/constants";

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{marginTop: 24, marginLeft: 24}}>姓名</Text>

                <TextInput style={{
                    marginLeft: 24,
                    marginRight: 24,
                    marginTop: 6,
                    borderColor: '#CED0CE',
                    borderWidth: 1,
                    borderRadius: 4,
                    paddingLeft: 8,
                    height: 42
                }}
                           editable={true}
                           underlineColorAndroid={'transparent'}

                />
                <Text style={{marginTop: 16, marginLeft: 24}}>POS机编码</Text>

                <TextInput style={{
                    marginLeft: 24,
                    marginRight: 24,
                    marginTop: 6,
                    borderColor: '#CED0CE',
                    borderWidth: 1,
                    borderRadius: 4,
                    paddingLeft: 8,
                    height: 42
                }}
                           editable={true}
                           underlineColorAndroid={'transparent'}
                           keyboardType={'phone-pad'}

                />
                <Text style={{marginTop: 16, marginLeft: 24}}>客户电话</Text>

                <TextInput style={{
                    marginLeft: 24,
                    marginRight: 24,
                    marginTop: 6,
                    borderColor: '#CED0CE',
                    borderWidth: 1,
                    borderRadius: 4,
                    paddingLeft: 8,
                    height: 42
                }}
                           editable={true}
                           underlineColorAndroid={'transparent'}
                           keyboardType={'phone-pad'}

                />
                <Text style={{marginTop: 16, marginLeft: 24}}>地区</Text>

                <TextInput style={{
                    marginLeft: 24,
                    marginRight: 24,
                    marginTop: 6,
                    borderColor: '#CED0CE',
                    borderWidth: 1,
                    borderRadius: 4,
                    paddingLeft: 8,
                    height: 42
                }}
                           editable={true}
                           underlineColorAndroid={'transparent'}
                />

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
