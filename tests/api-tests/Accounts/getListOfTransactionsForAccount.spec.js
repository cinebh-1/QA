import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';

test('Get list of transactions for account', async() => {

    const response = await apiClient.get('accounts/13677/transactions');
    expect(response.status).toBe(200);

    for (let i = 0; i < response.data.length; i++) {
        expect(response.data[i]).toHaveProperty('id');
        expect(response.data[i]).toHaveProperty('accountId');
        expect(response.data[i]).toHaveProperty('type');
        expect(response.data[i]).toHaveProperty('date');
        expect(response.data[i]).toHaveProperty('amount');
        expect(response.data[i]).toHaveProperty('description');
    } 
});
