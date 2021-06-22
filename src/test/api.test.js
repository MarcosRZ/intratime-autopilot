import chai from 'chai';
import {login, checkIn, checkOut} from '../api';
import axios from '../http';

import {
  CHECK_USER_ACTION_IN,
  API_USER,
  API_URL,
  API_CLOCKING_PATH
} from '../config';

const { todayDayEnd, todayDayStart } = require('../util');

describe('API tests', () => {

  // API Login test (uses .env credentials)
  describe('Login Test', () => {
      it('should log in', async () => {
          const result = await login();

          chai.should();

          result.should.have.property('USER_ID');
          result.should.have.property('USER_EMAIL');
          result.USER_EMAIL.should.equal(API_USER);
      });
  });

  // API Clocking endpoint health
  describe('Check API Health status', () => {
    it('should be online', async () => {
      const result = await axios.options(`${API_URL}${API_CLOCKING_PATH}`);

      chai.should();

      result.should.have.property('status');
      result.status.should.equal(200);
    })
  })

});