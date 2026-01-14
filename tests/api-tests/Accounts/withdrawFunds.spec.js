import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';
import { queryParams5 } from '../../../utils/queryParameters.js';

test('Withdraw funds', async() => {

     const response = await apiClient.post('/withdraw', null, {
        params: queryParams5
    }); 
    
    expect(response.status).toBe(200);
});