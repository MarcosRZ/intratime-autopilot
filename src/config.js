import dotenv from 'dotenv';

if (dotenv.config().error) {
  throw new Error('Unable to load dotenv');
};

export const ENABLE_MAIL_NOTIFICATIONS = process.env.ENABLE_MAIL_NOTIFICATIONS;
export const MAIL_USER = process.env.MAIL_USER;
export const MAIL_PASS = process.env.MAIL_PASS;
export const API_URL = process.env.API_URL;
export const API_LOGIN_PATH = process.env.API_LOGIN_PATH;
export const API_CLOCKING_PATH = process.env.API_CLOCKING_PATH;
export const API_APPLICATION_HEADER = process.env.API_APPLICATION_HEADER;
export const API_CONTENT_HEADER = process.env.API_CONTENT_HEADER;
export const API_USER = process.env.API_USER;
export const API_PASS = process.env.API_PASS;
export const CHECK_USER_ACTION_IN = process.env.CHECK_USER_ACTION_IN;
export const CHECK_USER_ACTION_OUT = process.env.CHECK_USER_ACTION_OUT;
export const CHECK_USER_IN_TIME = process.env.CHECK_USER_IN_TIME;
export const CHECK_USER_OUT_TIME = process.env.CHECK_USER_OUT_TIME;
export const CHECK_USER_USE_SERVER_TIME = process.env.CHECK_USER_USE_SERVER_TIME;
export const CHECK_USER_GPS_COORDINATES = process.env.CHECK_USER_GPS_COORDINATES;
export const CHECK_USER_PROJECT = process.env.CHECK_USER_PROJECT;
export const CHECK_USER_FILE = process.env.CHECK_USER_FILE;
export const CHECK_USER_EXPENSE = process.env.CHECK_USER_EXPENSE;
export const CHECK_USER_COMMENT = process.env.CHECK_USER_COMMENT;
export const CHECK_INOUT_DEVICE_ID = process.env.CHECK_INOUT_DEVICE_ID;
export const CHECK_EXPENSE_AMOUNT = process.env.CHECK_EXPENSE_AMOUNT;
export const CHECK_FROM_WEB = process.env.CHECK_FROM_WEB;
export const CHECK_TELECOMMUTING = process.env.CHECK_TELECOMMUTING;
