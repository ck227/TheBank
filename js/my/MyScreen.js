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
import IntroRecordScreen from './introduce/IntroRecordScreen'
import CardRecordScreen from './card/CardRecordScreen'
import PosScreen from './pos/PosScreen'

type Props = {};
export default class App extends Component<Props> {

    _goSetPhone = () => {
        this.props.navigation.navigate('BindPhoneScreen', {
            // newsId: item.newsId,
        })
    };

    _goIntroRecord = () => {
        this.props.navigation.navigate('IntroRecordScreen', {
            // newsId: item.newsId,
        })
    };

    _goCardRecord = () => {
        this.props.navigation.navigate('CardRecordScreen', {
            // newsId: item.newsId,
        })
    };

    _goPosRecord = () => {
        this.props.navigation.navigate('PosScreen', {
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

                    <TouchableOpacity onPress={this._goIntroRecord.bind(this)}
                                      style={{flex: 1, alignItems: 'center', paddingTop: 12, paddingBottom: 12}}>
                        <View style={{alignItems: 'center'}}>
                            <Text>介绍数</Text>
                            <Text>0</Text>
                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            width: 1,
                            backgroundColor: "#CED0CE",
                        }}
                    />
                    <TouchableOpacity onPress={this._goIntroRecord.bind(this)}
                                      style={{flex: 1, alignItems: 'center', paddingTop: 12, paddingBottom: 12}}>
                        <View style={{alignItems: 'center'}}>
                            <Text>未结算</Text>
                            <Text>0</Text>
                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            width: 1,
                            backgroundColor: "#CED0CE",
                        }}
                    />
                    <TouchableOpacity onPress={this._goIntroRecord.bind(this)}
                                      style={{flex: 1, alignItems: 'center', paddingTop: 12, paddingBottom: 12}}>
                        <View style={{alignItems: 'center'}}>
                            <Text>已结算</Text>
                            <Text>0</Text>
                        </View>
                    </TouchableOpacity>
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

                <TouchableOpacity onPress={this._goCardRecord.bind(this)}>
                    <View style={styles.items}>
                        <Image
                            source={require('./img/my_record.png')}
                            style={styles.icon}/>
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

                <TouchableOpacity onPress={this._goPosRecord.bind(this)}>
                    <View style={styles.items}>
                        <Image
                            source={require('./img/my_pos.png')}
                            style={styles.icon}/>
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
                    }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    phoneParent: {
        flexDirection: 'row',
        padding: 24,
        backgroundColor: 'white'
    },
    items: {
        flexDirection: 'row',
        alignItems:'center',
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: 'white'
    },
    icon: {
        height: 28,
        width: 28
    },
    arrow: {
        height: 20,
        width: 20
    },
});
