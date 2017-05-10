import {observable, action, computed} from 'mobx';
import {now} from 'mobx-utils';
import moment from 'moment';
import 'moment-duration-format';

const TICK_INTERVAL = 75;

export default class TimerModel {
    @observable startTime = null;

    get isRunning() {
        return this.startTime != null;
    }

    @action start() {
        this.startTime = now(TICK_INTERVAL);
    }

    @action stop() {
        this.startTime = null;
    }

    @computed get elapsedTime() {
        if (this.isRunning) {
            return now(TICK_INTERVAL) - this.startTime;
        } else {
            return 0;
        }
    }

    @computed get label() {
        return moment
            .duration(this.elapsedTime)
            .format({template: 'mm:ss,SSS', trim: false});
    }
}