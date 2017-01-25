import TimerStore from '../../src/stores/TimerStore';

test('TimerStore has one Timer', () => {
    const store = new TimerStore();
    expect(store.timers.length).toEqual(1);
});