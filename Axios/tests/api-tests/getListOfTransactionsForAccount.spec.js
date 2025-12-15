import { test, expect } from '@playwright/test';
import { apiClient } from '../../utils/apiClient.js';

test('Get list of transactions for account', async() => {

    const response = await apiClient.get('/accounts/13677/transactions');

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('accountId');
    expect(response.data).toHaveProperty('type');
    expect(response.data).toHaveProperty('date');
    expect(response.data).toHaveProperty('amount');
    expect(response.data).toHaveProperty('description');
});
