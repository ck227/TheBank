"use strict";

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Colors,
} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation';

import NewsScreen from '../news/NewsScreen'
import NewsDetailScreen from '../news/NewsDetailScreen'

import CardsScreen from '../cards/CardsScreen'
import MyScreen from '../my/MyScreen'


import BindPhoneScreen from '../my/phone/BindPhoneScreen'

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20,
    },
});

const MainTabNavigator = TabNavigator({
    News: {
        screen: NewsScreen,
        navigationOptions: {
            headerTitle: '线上特惠',
            tabBarLabel: '线上特惠',
            headerLeft: null,//去左边返回键
            headerStyle: {
                backgroundColor: '#03A7FF',
            },
            headerTitleStyle: {
                color: 'white'
            },
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../news/img/news.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        },

    },
    Cards: {
        screen: CardsScreen,
        navigationOptions: {
            // header: ,
            headerTitle: '金融产品',
            tabBarLabel: '金融产品',
            headerLeft: null,
            headerStyle: {
                backgroundColor: '#03A7FF',
            },
            headerTitleStyle: {
                color: 'white'
            },

            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../cards/img/cards.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        },
    },
    My: {
        screen: MyScreen,
        navigationOptions: {
            headerTitle: '我的',
            tabBarLabel: '我的',
            headerLeft: null,//去左边返回键
            headerStyle: {
                backgroundColor: '#03A7FF',
            },
            headerTitleStyle: {
                color: 'white'
            },

            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../my/img/my.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        },
    },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
        activeTintColor: '#46bafe',
        inactiveTintColor: '#6a7084',
        showLabel: true,
        showIcon: true,
        style: {
            backgroundColor: 'white',
            height: 60
        },
        indicatorStyle: {
            height: 0
        }
    }
});

// const MyStackNavigator = StackNavigator({
//     BindPhoneScreen: {
//         screen: BindPhoneScreen,
//         navigationOptions: {
//             headerTitle: '手机号绑定',
//         }
//     },
// }, {
//     navigationOptions: {},
//     headerMode: 'none',
// })

const MainStackNavigator = StackNavigator({
    MainTabNavigator: {
        screen: MainTabNavigator,
    },
    NewsDetailScreen: {
        screen: NewsDetailScreen,
        navigationOptions: {
            headerTitle: '详情',
        }
    },
    // PractiseNavi: {
    //     screen: PractiseNavi,
    // },
    BindPhoneScreen: {
        screen: BindPhoneScreen,
        navigationOptions: {
            headerTitle: '手机号绑定',
        }
    },

}, {
    navigationOptions: {},
    // headerMode: 'none',
})

export default MainStackNavigator