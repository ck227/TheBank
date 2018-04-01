"use strict";

import React, {Component} from 'react';
import {
    StyleSheet,
    WebView,
    View
} from 'react-native';

import {constants} from '../network/constants'

type Props = {};
export default class App extends Component<Props> {
    render() {
        const {params} = this.props.navigation.state;
        // var url = `${constants.url + 'articleinfoHtml/details.html'}?id=${params.id}`
        var url = `${constants.url + 'articleinfoHtml/details.html'}?id=${params.id}`
        return (
            <View style={styles.container}>
                <WebView
                    style={styles.container}
                    source={{uri: url}}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});
