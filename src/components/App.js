import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Timer from './Timer';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headline}>
                        Timer
                    </Text>
                </View>
                <View style={styles.content}>
                    <Timer/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headline: {
        fontSize: 30
    },
    content: {
        flex: 5
    }
});
