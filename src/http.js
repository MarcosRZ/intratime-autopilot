import axios from 'axios';
import {
  API_URL,
  API_APPLICATION_HEADER,
  API_CONTENT_HEADER,
} from './config'

const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: {
    'Accept': API_APPLICATION_HEADER,
    'Content-Type': API_CONTENT_HEADER,
  }
});

export default instance;