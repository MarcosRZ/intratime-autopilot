import chai from 'chai';
import mailService from '../mail.service';

import {
  CHECK_USER_ACTION_IN,
} from '../config';

const { todayDayStart } = require('../util');

describe('Mail tests', () => {

  // Success Mail notification
  describe('mail.success() Test', () => {
      it('should be sent', async () => {
          const { accepted, rejected } = await mailService.success({ type: CHECK_USER_ACTION_IN, timestamp: todayDayStart()})

          chai.assert.lengthOf(accepted, 1);
          chai.assert.lengthOf(rejected, 0);
      });
  });

  // Error Mail notification
  describe('mail.error() Test', () => {
      it('should be sent', async () => {

          const { accepted, rejected } = await mailService.error({
            type: CHECK_USER_ACTION_IN,
            timestamp: todayDayStart(),
            error: new Error('Test error')
          })

          chai.should();
          accepted.should.have.lengthOf(1);
          rejected.should.have.lengthOf(0);
      });
  });

});