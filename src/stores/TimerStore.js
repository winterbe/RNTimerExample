import {observable} from 'mobx';
import TimerModel from './TimerModel';

export const NUM_TIMERS = 10;

export default class TimerStore {
    @observable timers = [];

    constructor() {
        for (let i = 0; i < NUM_TIMERS; i++) {
            this.timers.push(new TimerModel());
        }
    }
}