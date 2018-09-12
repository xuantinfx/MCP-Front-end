import axios from 'axios';
import {AUTHORIZATION} from './constants/LocalStorage';

export const createAxiosConfig = () => {
    // Default HTTP Headers
    axios.defaults.headers.common[AUTHORIZATION] = localStorage.hasOwnProperty(AUTHORIZATION) ? localStorage.getItem(AUTHORIZATION) : '';

    // Default Timeout (miliseconds)
    axios.defaults.timeout = 300000;
}