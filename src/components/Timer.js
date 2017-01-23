import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import moment from 'moment';
import 'moment-duration-format';

/**
 * @author winterbe
 */
export default class StopWatch extends Component {
    static propTypes = {
        startTime: React.PropTypes.number,
        running: React.PropTypes.bool
    };

    render() {
        const now = Date.now();
        const {startTime = now, running = false} = this.props;
        const text = moment
            .duration(now - startTime)
            .format({template: 'mm:ss,SS', trim: false});
        return (
            <View style={styles.view}>
                <Text style={styles.text}>
                    {text}
                </Text>
                {running && (
                    <Button title="Stop" onPress={() => console.log('start')}/>
                )}
                {!running && (
                    <Button title="Start" onPress={() => console.log('stop')}/>
                )}
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