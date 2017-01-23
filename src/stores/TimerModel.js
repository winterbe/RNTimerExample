import {observable, action, computed} from 'mobx';
import moment from 'moment';
import 'moment-duration-format';

export default class TimerModel {
    @observable startTime = null;
    @observable tickTime = null;
    @observable running = false;

    @action toggle() {
        if (this.running) {
            this.stop();
        } else {
            this.start();
        }
    }

    @action start() {
        this.startTime = Date.now();
        this.tickTime = Date.now();
        this.running = true;
    }

    @action stop() {
        this.startTime = null;
        this.tickTime = null;
        this.running = false;
    }

    @action tick() {
        if (this.running) {
            this.tickTime = Date.now();
        }
    }

    @computed get label() {
        return moment
            .duration(this.tickTime - this.startTime)
            .format({template: 'mm:ss,SS', trim: false});
    }
}