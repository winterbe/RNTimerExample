import {observable, action, computed} from 'mobx';
import TimerModel from './TimerModel';

export default class TimerStore {
    @observable timers = [];

    constructor() {
        this.timers.push(new TimerModel());
    }

    @action tick() {
        this.timers.forEach(it => it.tick());
    }
}