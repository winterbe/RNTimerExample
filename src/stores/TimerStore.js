import {observable, action, computed} from 'mobx';
import TimerModel from './TimerModel';

const TICK_DELAY = 40;

export default class TimerStore {
    @observable timers = [];

    constructor() {
        this.timers.push(new TimerModel());
        this.timers.push(new TimerModel());
        this.timers.push(new TimerModel());
        this.timers.push(new TimerModel());
        this.timers.push(new TimerModel());
        this.timers.push(new TimerModel());
        this.timers.push(new TimerModel());
        this.timers.push(new TimerModel());
        this.timers.push(new TimerModel());
        this.timers.push(new TimerModel());
    }

    @action tick() {
        this.timers.forEach(it => it.tick());
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