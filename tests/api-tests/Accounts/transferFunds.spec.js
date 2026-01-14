import {test, expect} from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';
import { queryParams4 } from '../../../utils/queryParameters.js';

//napraviti novi akaunt radi transfera
test('Transfer funds', async() => {

    const response = await apiClient.post('/transfer', null, {
        params: queryParams4
    });

    expect(response.status).toBe(200);
});