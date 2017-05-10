import React, {Component} from 'react';
import {useStrict} from 'mobx';
import {observer} from 'mobx-react/native';
import {enableLogging} from 'mobx-logger';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Timer from './Timer';
import TimerStore from '../stores/TimerStore';

useStrict(true);

enableLogging({
    predicate: () => __DEV__ && Boolean(window.navigator.userAgent),
    action: true,
    reaction: false,
    compute: false
});

/**
 * @author winterbe
 */
@observer
export default class App extends Component {
    static defaultProps = {
        store: new TimerStore()
    };

    render() {
        const {store} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headline}>
                        RNTimerExample
                    </Text>
                </View>
                <View style={styles.content}>
                    {store.timers.map((timer, i) => (
                        <Timer timerModel={timer} key={i}/>
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
