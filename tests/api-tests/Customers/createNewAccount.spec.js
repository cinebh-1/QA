import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';
import { queryParams6 } from '../../../utils/queryParameters.js';

test('Create a new account', async() => {

    const response = await apiClient.post('/createAccount', null, {
        params: queryParams6
    })

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('customerId');
    expect(response.data).toHaveProperty('type');
    expect(response.data).toHaveProperty('balance');
});