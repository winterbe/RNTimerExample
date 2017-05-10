import React, {Component} from 'react';
import {observer} from 'mobx-react/native';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import TimerModel from '../stores/TimerModel';

/**
 * @author winterbe
 */
@observer
export default class Timer extends Component {
    static propTypes = {
        timerModel: React.PropTypes.instanceOf(TimerModel),
    };

    render() {
        const {timerModel} = this.props;
        const isRunning = timerModel.isRunning;
        return (
            <View style={styles.view}>
                <Text style={styles.label}>
                    {timerModel.label}
                </Text>
                <Button title={isRunning ? 'Stop' : 'Start'}
                        color={isRunning ? '#d9534f' : '#337ab7'}
                        onPress={() => isRunning
                            ? timerModel.stop()
                            : timerModel.start()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    label: {
        fontFamily: 'Courier New',
        fontSize: 26,
        width: 160,
        color: '#222'
    }
});