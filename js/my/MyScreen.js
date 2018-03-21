"use strict";

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import BindPhoneScreen from './phone/BindPhoneScreen'

type Props = {};
export default class App extends Component<Props> {

    _goSetPhone = () => {
        this.props.navigation.navigate('BindPhoneScreen', {
            // newsId: item.newsId,
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._goSetPhone.bind(this)}>
                    <View style={styles.phoneParent}>
                        <Text>手机号：</Text>
                        <Text>未绑定手机号</Text>
                        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                            <Image
                                source={require('./img/arrow.png')}
                                style={styles.arrow}/>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    phoneParent: {
        flex: 1,
        flexDirection: 'row',
        padding: 24
    },
    arrow: {
        height: 20,
        width: 20
    },
});
