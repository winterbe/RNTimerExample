import React, {Component} from 'react';
import {observer} from 'mobx-react/native';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Timer from './Timer';
import TimerStore from '../stores/TimerStore';

const timerStore = new TimerStore();

/**
 * @author winterbe
 */
@observer
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
                    {timerStore.timers.map((timerModel, i) => (
                        <Timer timerModel={timerModel} key={i}/>
                    ))}
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
