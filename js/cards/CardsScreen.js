"use strict";

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

// import Picker from 'react-native-picker';
const {width, height} = Dimensions.get('window');
import Menu from "./menu/Menu";

// https://blog.csdn.net/xiangzhihong8/article/details/76862097  参考

const CONFIG = [
    {
        type: 'subtitle',
        selectedIndex: 1,
        data: [
            {title: '全部', subtitle: ''},//1000
            {title: '自助餐', subtitle: ''},
            {title: '自助餐', subtitle: ''},
            {title: '自助餐', subtitle: ''},
            {title: '自助餐', subtitle: ''},
            {title: '自助餐', subtitle: ''},
            {title: '自助餐', subtitle: ''},
        ]
    },
    {
        type: 'title',
        selectedIndex: 0,
        data: [{
            title: '智能排序'
        }, {
            title: '离我最近'
        }, {
            title: '好评优先'
        }, {
            title: '人气最高'
        }]
    }
];

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            data:{}
        };
    }

    renderContent=()=>{
        return (
            <TouchableOpacity >
                <Text style={styles.text}>index:{this.state.index} subindex:{this.state.subindex} title:{this.state.data.title}</Text>
            </TouchableOpacity>
        );
        // alert(this.state.data.title)
    };

    onSelectMenu=(index, subindex, data)=>{
        this.setState({index, subindex, data});
    };

    render() {
        return (
            <View style={styles.container}>
                <Menu style={styles.container} config={CONFIG} onSelectMenu={this.onSelectMenu} renderContent={this.renderContent}/>
                {/*<Picker
                    mode={'dialog'}
                    selectedValue={this.state.bank}
                    onValueChange={(itemValue, itemIndex) => this.setState({bank: itemValue})}>
                    <Picker.Item label="全部银行" value="0" style={{color:'red'}}/>
                    <Picker.Item label="中国银行" value="1" style={{padding:16}}/>
                    <Picker.Item label="中国工商银行" value="2" style={{padding:16}}/>
                    <Picker.Item label="中国农业银行" value="3" style={{padding:16}}/>
                    <Picker.Item label="光大银行" value="4" style={{padding:16}}/>
                    <Picker.Item label="招商银行" value="5" style={{padding:16}}/>
                    <Picker.Item label="民生银行" value="6" style={{padding:16}}/>
                    <Picker.Item label="广发银行" value="7" style={{padding:16}}/>

                </Picker>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:width,
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize:20,
        marginTop:100,
        justifyContent: 'center',
        alignItems: 'center',

    },
});
