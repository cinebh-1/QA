import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';
import { queryParams3 } from '../../../utils/queryParameters.js';

test('Get list of customer accounts', async() => {

    const response = await apiClient.post('/createAccount', null, {
        params: queryParams3    
    });

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('customerId');
    expect(response.data).toHaveProperty('type');
    expect(response.data).toHaveProperty('balance');
});