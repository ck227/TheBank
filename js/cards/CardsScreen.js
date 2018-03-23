"use strict";

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Picker,
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            bank: '0',
            loading: false,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Picker
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

                </Picker>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
