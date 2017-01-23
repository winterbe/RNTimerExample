import React, {Component} from 'react';
import {observer} from 'mobx-react/native';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Timer from './Timer';
import TimerStore from '../stores/TimerStore';

/**
 * @author winterbe
 */
@observer
export default class App extends Component {
    static defaultProps = {
        store: new TimerStore()
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headline}>
                        RNTimerExample
                    </Text>
                </View>
                <View style={styles.content}>
                    {this.props.store.timers.map((model, i) => (
                        <Timer model={model} key={i}/>
                    ))}
                </View>
            </View>
        );
    }

    componentDidMount() {
        this.props.store.enable();
    }

    componentWillUnmount() {
        this.props.store.disable();
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
