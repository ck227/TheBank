"use strict";

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', paddingTop: 14, paddingBottom: 14,backgroundColor:'#fbfbfb'}}>
                    <Text style={{flex: 1,textAlign:'center',color:'#151515'}} >时间</Text>
                    <Text style={{flex: 1,textAlign:'center',color:'#151515'}}>名称</Text>
                    <Text style={{flex: 1,textAlign:'center',color:'#151515'}}>额度</Text>
                    <Text style={{flex: 1,textAlign:'center',color:'#151515'}}>状态</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebeb',
    },

});
