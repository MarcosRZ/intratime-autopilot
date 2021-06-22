import {
  CHECK_USER_IN_TIME,
  CHECK_USER_OUT_TIME,
} from './config'

export const now = () => {
  const date = new Date();

  return `${_padTo2(date.getHours())}:${_padTo2(date.getMinutes())}:${_padTo2(date.getSeconds())}`;
}

export const today = () => {
  const date = new Date();
  return `${_padTo2(date.getFullYear())}-${_padTo2(date.getMonth() + 1)}-${_padTo2(date.getDate())}`;
}

export const todayNow = () => `${today()} ${now()}`;

export const todayDayStart = () => `${today()} ${CHECK_USER_IN_TIME}`;

export const todayDayEnd = () => `${today()} ${CHECK_USER_OUT_TIME}`;

export const _padTo2 = (n) => {
  return String(n).padStart(2, '0')
}