import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';
import { payload1 } from '../../../utils/payloads.js';
import { queryParams1 } from '../../../utils/queryParameters.js';

test('Bill pay', async() => {

    // Sending POST request 
    const response = await apiClient.post('/billpay', payload1, {
        params: queryParams1
    });
    
    // Assertions 
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('accountId');
    expect(response.data).toHaveProperty('amount');
    expect(response.data).toHaveProperty('payeeName');
});

