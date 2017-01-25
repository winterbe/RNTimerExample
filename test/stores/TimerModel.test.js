import TimerModel from '../../src/stores/TimerModel';

test('default TimerModel label', () => {
    const timer = new TimerModel();
    expect(timer.label).toEqual('00:00,000');
});