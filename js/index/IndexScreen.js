"use strict";

import React, {Component} from 'react';

import SplashScreen from 'react-native-splash-screen'

import MainScreen from '../main/MainScreen'

export default class IndexScreen extends Component<{}> {

    static navigationOptions = {
        header: null,//添加了navigation之后会有标题栏，这里去掉
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        setTimeout(() => {
                SplashScreen.hide()
            },
            500
        );
    }

    render() {
        return (
            <MainScreen/>
        );
    }

}