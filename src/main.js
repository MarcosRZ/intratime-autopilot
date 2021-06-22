import { checkIn, checkOut } from "./api";
import { todayDayStart, todayDayEnd } from './util';
import notify from './notify';

const actionParam = process.argv[2];

try {

  switch (actionParam) {

    case 'IN':

      const timestamp = todayDayStart();

      console.log('CHECK IN...');
      checkIn(timestamp).then(_ => {
        notify.success({ type: actionParam, timestamp })
        console.log(`CHECK IN Successfull`);
      });
      break;

    case 'OUT':
      console.log('CHECKING OUT...');
      checkOut(todayDayEnd()).then(_ => {
        console.log(`CHECK OUT Successfull`);
      });
      break;

    case 'INOUT':
      console.log('CHECKING IN...');
      const timestampIn = todayDayStart();
      checkIn(timestampIn).then(_ => {
        notify.success({ type: actionParam, timestampIn })
        console.log(`CHECK IN Successfull`);
        console.log('CHECKING OUT...');
        const timestampOut = todayDayEnd();
        checkOut(timestampOut).then(_ => {
          notify.notify({ type: actionParam, timestampOut })
          console.log(`CHECK OUT Successfull`);
        });
      });
    break;
    default:
      console.log(`USAGE: node main ( IN | OUT | INOUT )`)
  }
} catch (e) {
  console.error(e);
}