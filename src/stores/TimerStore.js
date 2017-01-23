import {observable, action, computed} from 'mobx';
import TimerModel from './TimerModel';

const TICK_DELAY = 100;

export default class TimerStore {
    @observable timers = [];

    constructor() {
        this.initTimers();
    }

    @action initTimers() {
        this.timers.push(new TimerModel());
        // this.timers.push(new TimerModel());
        // this.timers.push(new TimerModel());
        // this.timers.push(new TimerModel());
        // this.timers.push(new TimerModel());
        // this.timers.push(new TimerModel());
        // this.timers.push(new TimerModel());
        // this.timers.push(new TimerModel());
        // this.timers.push(new TimerModel());
        // this.timers.push(new TimerModel());
    }

    @action tick() {
        this.timers.forEach(timer => {
            if (timer.running) {
                timer.tick();
            }
        });
    }

    @action enable() {
        this.interval = setInterval(() => this.tick(), TICK_DELAY);
    }

    @action disable() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}