"use strict";

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
    FlatList,
    RefreshControl,
    ActivityIndicator,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import Menu from "./menu/Menu";
import {constants} from "../network/constants";

import NewsDetailScreen from './CardDetaiScreen'

// https://blog.csdn.net/xiangzhihong8/article/details/76862097  参考

const CONFIG = [
    {
        type: 'subtitle',
        selectedIndex: 0,
        data: [
            {title: '全部银行', subtitle: ''},//1000
            {title: '中国银行', subtitle: ''},
            {title: '中国工商银行', subtitle: ''},
            {title: '中国农业银行', subtitle: ''},
            {title: '光大银行', subtitle: ''},
            {title: '招商银行', subtitle: ''},
            {title: '民生银行', subtitle: ''},
            {title: '广发银行', subtitle: ''},
        ]
    },
    // {
    //     type: 'title',
    //     selectedIndex: 0,
    //     data: [{
    //         title: '智能排序'
    //     }, {
    //         title: '离我最近'
    //     }, {
    //         title: '好评优先'
    //     }, {
    //         title: '人气最高'
    //     }]
    // }
];

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
        };
    }

    onSelectMenu = (index, subindex, data) => {
        this.setState({index, subindex, data});
    };

    render() {
        return (
            <View style={styles.container}>
                <Menu style={styles.container} config={CONFIG} onSelectMenu={this.onSelectMenu} navigation={this.props.navigation}/>
                {/*<TouchableOpacity>
                    <Text
                        style={styles.text}>subindex:{this.state.subindex} title:{this.state.data.title}</Text>
                </TouchableOpacity>*/}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

});
