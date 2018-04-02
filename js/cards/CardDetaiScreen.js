"use strict";

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

import {constants} from '../network/constants'

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        // const {params} = this.props.navigation.state;
        var url = `${constants.url + 'bankcardFront/detailsBean.html'}?id=${this.props.id}`
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.obj,
                });
            })
            .catch(error => {
                // this.setState({error, loading: false});
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: constants.PicUrl + this.state.data === null ? '' : this.state.data.imgPatch}}
                    style={styles.img}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    img: {
        height: 100,
        width: 200,
        margin: 10,
    },

});
