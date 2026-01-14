import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';

test('Fetch transactions by month and type for account', async() => {

    const response = await apiClient.get('/accounts/13677/transactions/month/December/type/2');

    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
});
