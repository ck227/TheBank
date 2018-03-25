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

                    <TextInput style={{flex: 1}}
                               editable={true}
                    />
                </View>

                <Text style={{margin: 16}}>短信验证码</Text>

                <View style={styles.textInput}>
                    <Image
                        source={require('../img/my_code.png')}
                        style={styles.icon}/>

                    <TextInput style={{flex: 1}}
                               editable={true}
                    />
                </View>
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
        height: 24,
        width: 24
    },
    textInput: {
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 16,
        borderColor: '#CED0CE',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8
    }

});
