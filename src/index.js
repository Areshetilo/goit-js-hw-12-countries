import './styles.css';
import colorSwitch from './js/color-switch';
import promiseTask01 from './js/promise-task-01';
import promiseTask02 from './js/promise-task-02';
import promiseTask03 from './js/promise-task-03';
import { CountdownTimer } from './js/timer';

colorSwitch();

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 13, 2021'),
});
timer.init();


promiseTask01();
promiseTask02();
promiseTask03();

