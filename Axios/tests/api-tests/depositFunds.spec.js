import { test, expect } from '@playwright/test';
import { apiClient } from '../../utils/apiClient.js';
import { queryParams2 } from '../../utils/queryParameters.js';

test('Deposit funds', async() => {

    const response = await apiClient.post('/deposit', null, {
        params: queryParams2
    });

    expect(response.status).toBe(200);
});