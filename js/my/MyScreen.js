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
                        <Text>请绑定手机号</Text>

                        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                            <Image
                                source={require('./img/arrow.png')}
                                style={styles.arrow}/>
                        </View>

                    </View>
                </TouchableOpacity>
                <View
                    style={{
                        height: 1,
                        backgroundColor: "#CED0CE",
                    }}
                />
                <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
                    <View style={{flex: 1, alignItems: 'center', paddingTop: 12, paddingBottom: 12}}>
                        <Text>介绍数</Text>
                        <Text>0</Text>
                    </View>
                    <View
                        style={{
                            width: 1,
                            backgroundColor: "#CED0CE",
                        }}
                    />
                    <View style={{flex: 1, alignItems: 'center', paddingTop: 12, paddingBottom: 12}}>
                        <Text>未结算</Text>
                        <Text>0</Text>
                    </View>
                    <View
                        style={{
                            width: 1,
                            backgroundColor: "#CED0CE",
                        }}
                    />
                    <View style={{flex: 1, alignItems: 'center', paddingTop: 12, paddingBottom: 12}}>
                        <Text>已结算</Text>
                        <Text>0</Text>
                    </View>
                </View>
                <View
                    style={{
                        height: 1,
                        backgroundColor: "#CED0CE",
                    }}
                />

                <View
                    style={{
                        height: 1,
                        backgroundColor: "#CED0CE",
                        marginTop: 12
                    }}
                />

                <TouchableOpacity onPress={this._goSetPhone.bind(this)}>
                    <View style={styles.items}>
                        <Image
                            source={require('./img/my_record.png')}
                            style={styles.arrow}/>
                        <Text style={{marginLeft: 12}}>申请记录</Text>
                        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                            <Image
                                source={require('./img/arrow.png')}
                                style={styles.arrow}/>
                        </View>
                    </View>
                </TouchableOpacity>

                <View
                    style={{
                        height: 1,
                        backgroundColor: "#CED0CE",
                    }}
                />

                <TouchableOpacity onPress={this._goSetPhone.bind(this)}>
                    <View style={styles.items}>
                        <Image
                            source={require('./img/my_pos.png')}
                            style={styles.arrow}/>
                        <Text style={{marginLeft: 12}}>我的POS机</Text>
                        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                            <Image
                                source={require('./img/arrow.png')}
                                style={styles.arrow}/>
                        </View>
                    </View>
                </TouchableOpacity>

                <View
                    style={{
                        height: 1,
                        backgroundColor: "#CED0CE",
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebeb',
    },
    phoneParent: {
        flexDirection: 'row',
        padding: 24,
        backgroundColor: 'white'
    },
    items: {
        flexDirection: 'row',
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: 'white'
    },
    arrow: {
        height: 20,
        width: 20
    },
});
