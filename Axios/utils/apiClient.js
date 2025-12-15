import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://parabank.parasoft.com/parabank/services/bank',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json'}
});