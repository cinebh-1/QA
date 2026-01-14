import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';

test('Get list of transactions for account', async() => {

    //popraviti
    const response = await apiClient.get('accounts/13677/transactions');

    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');

    for (let i = 0; i < response.data.length; i++) {
        expect(response.data[i]).toHaveProperty('id');
        expect(response.data[i]).toHaveProperty('accountId');
        expect(response.data[i]).toHaveProperty('type');
        expect(response.data[i]).toHaveProperty('amount');
        expect(response.data[i]).toHaveProperty('description');
    }
});