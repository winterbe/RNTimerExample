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
        return (
            <View style={styles.view}>
                <Text style={styles.text}>
                    {timerModel.label}
                </Text>
                <Button title={timerModel.running ? 'Stop' : 'Start'}
                        onPress={() => timerModel.toggle()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 22,
        marginRight: 20
    }
});