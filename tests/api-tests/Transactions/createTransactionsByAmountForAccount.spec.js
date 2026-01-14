import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';

test('Create transactions by amount for account', async() => {

    const response = await apiClient.get('/accounts/13677/transactions/amount/45');

    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
});