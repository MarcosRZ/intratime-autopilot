import axios from './http';
import {
  API_URL, 
  API_LOGIN_PATH, 
  API_CLOCKING_PATH,
  API_USER, 
  API_PASS,
  CHECK_USER_ACTION_IN,
  CHECK_USER_ACTION_OUT,
  CHECK_USER_USE_SERVER_TIME,
  CHECK_USER_GPS_COORDINATES,
  CHECK_USER_PROJECT,
  CHECK_USER_FILE,
  CHECK_USER_EXPENSE,
  CHECK_USER_COMMENT,
  CHECK_INOUT_DEVICE_ID,
  CHECK_EXPENSE_AMOUNT,
  CHECK_FROM_WEB,
  CHECK_TELECOMMUTING,
  
} from './config'


export const login = async () => {

  const url = `${API_URL}${API_LOGIN_PATH}`;

  const params = new URLSearchParams()
  params.append('user', API_USER);
  params.append('pin', API_PASS);

  return axios.post(url, params).then(x => x.data);
}

export const checkIn = async (timestamp) => {
  return _checkAction(CHECK_USER_ACTION_IN, timestamp);
}

export const checkOut = async (timestamp) => {
  return _checkAction(CHECK_USER_ACTION_OUT, timestamp);
}

const _checkAction = async (action, timestamp) => {
  
  console.log(`[CHECK ACTION]=(${action}) [TIMESTAMP]=(${timestamp})`);

  const { USER_TOKEN } = await login();

  console.log('LOGIN SUCCESS', USER_TOKEN)

  const url = `${API_URL}${API_CLOCKING_PATH}`;

  const params = new URLSearchParams()
  params.append('user_action', action);
  params.append('user_timestamp', timestamp);
  params.append('user_use_server_time', CHECK_USER_USE_SERVER_TIME);
  params.append('user_gps_coordinates', CHECK_USER_GPS_COORDINATES);
  params.append('user_project', CHECK_USER_PROJECT);
  params.append('user_file', CHECK_USER_FILE);
  params.append('user_expense', CHECK_USER_EXPENSE);
  params.append('user_comment', CHECK_USER_COMMENT);
  params.append('inout_device_id', CHECK_INOUT_DEVICE_ID);
  params.append('expense_amount', CHECK_EXPENSE_AMOUNT);
  params.append('from_web', CHECK_FROM_WEB);
  params.append('telecommuting', CHECK_TELECOMMUTING);

  const options = {
    headers: { 'token': USER_TOKEN }
  }
  
  return axios.post(url, params, options).then(x => x.data);
}