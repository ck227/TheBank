"use strict";

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    RefreshControl,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';

import NewsDetailScreen from './NewsDetailScreen'
import {constants} from "../network/constants";

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            news: [],
            page: 1,
            loading: false,
            refreshing: false,
        };
    }

    componentDidMount() {
        this.getNews()
    }

    getNews = () => {
        var url = `${constants.url}?service=news.list&pageNo=${this.state.page}&parent=25`
        this.setState({loading: true});
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    news: this.state.page === 1 ? res.resultData : [...this.state.news, ...res.resultData],
                    loading: false,
                    refreshing: false,
                });
            })
            .catch(error => {
                this.setState({error, loading: false});
            });
    }

    handleRefresh = () => {
        this.setState(
            {
                page: 1,
                refreshing: true
            },
            () => {
                this.getNews();
            }
        );
    };

    handleLoadMore = () => {
        this.setState(
            {
                page: this.state.page + 1
            },
            () => {
                this.getNews();
            }
        );
    };

    renderFooter = () => {
        if (!this.state.loading) return null;
        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}>
                <ActivityIndicator animating size="large"/>
            </View>
        );
    };

    _itemClick = (item) => {
        this.props.navigation.navigate('NewsDetailScreen', {
            // newsId: item.newsId,
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.news}
                    renderItem={({item}) => (

                        <TouchableOpacity onPress={this._itemClick.bind(this, item)}>
                            <View style={styles.item}>

                                <View style={styles.container2}>

                                    <View style={styles.leftContainer}>
                                        <Text numberOfLines={2} style={styles.title}>{item.shortTitle}</Text>
                                        <Text style={styles.time}>{item.issueTime}</Text>
                                    </View>

                                    <Image
                                        source={{uri: constants.PicUrl + item.thumbPath}}
                                        style={styles.thumbnail}/>
                                </View>

                            </View>
                        </TouchableOpacity>
                    )}
                    ItemSeparatorComponent={() =>
                        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                            {/*<View
                                style={{
                                    height: 1,
                                    width: 120,
                                    backgroundColor: 'white'
                                }}/>*/}
                            <View
                                style={{
                                    height: 1,
                                    backgroundColor: "#CED0CE",
                                }}
                            />

                        </View>
                    }
                    refreshControl={
                        <RefreshControl
                            colors={["#9Bd35A", "#689F38"]}
                            refreshing={this.state.refreshing}
                            onRefresh={this.handleRefresh}
                        />
                    }
                    keyExtractor={(item, index) => index.toString()}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    onEndReached={this.handleLoadMore}
                    //onEndReachedThreshold={15}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    //下面的列表
    item: {
        flex: 1,
        flexDirection: 'column',
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 12,
        paddingBottom: 12
    },
    leftContainer: {
        flex: 1,
    },
    title: {
        color: '#333333',
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'left',
    },
    time: {
        color: '#999999',
        marginTop: 8,
        fontSize: 12,
        textAlign: 'left'
    },
    thumbnail: {
        width: 120,
        height: 80,
    },
    listView: {
        backgroundColor: '#FFFFFF',
    },
});

function _generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};
