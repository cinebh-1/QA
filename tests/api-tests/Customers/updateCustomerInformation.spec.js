import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';
import { queryParams7 } from '../../../utils/queryParameters.js';
 
test('Update customer information', async() => {

    const response = await apiClient.post('/customers/update/13677', null, {
        params: queryParams7
    })

    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
});