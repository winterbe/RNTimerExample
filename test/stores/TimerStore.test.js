import TimerStore, {NUM_TIMERS} from '../../src/stores/TimerStore';

test('TimerStore has one Timer', () => {
    const store = new TimerStore();
    expect(store.timers.length).toEqual(NUM_TIMERS);
});