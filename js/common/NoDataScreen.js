"use strict";

import React, {Component} from 'react';
import {
    Text,
    Image,
    View
} from 'react-native';

type Props = {};
export default class NoDataScreen extends Component<Props> {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    source={require('./img/noData.png')}
                    style={{height: 100, width: 100}}/>
                <Text style={{marginTop: 16}}>暂无数据</Text>
            </View>
        );
    }
}

