import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';
import { queryParams8 } from '../../../utils/queryParameters.js';

test('Request a loan', async() => {

    const response = await apiClient.post('/requestLoan', null, {
        params: queryParams8
    })

    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
    expect(response.data).toHaveProperty('responseDate');
    expect(response.data).toHaveProperty('loanProviderName');
    expect(response.data).toHaveProperty('approved');
    expect(response.data).toHaveProperty('accountId');
});

