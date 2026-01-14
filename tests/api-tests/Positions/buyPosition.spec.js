import { test, expect } from '@playwright/test';
import { apiClient } from "../../../utils/apiClient";
import { queryParams9 } from '../../../utils/queryParameters.js';

test('Buy a position', async() => {

    const response = await apiClient.post('customers/12545/buyPosition', null, {
        params: queryParams9
    });

    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');

    for (let i = 0; i < response.data.length; i++) {
        expect(response.data[i]).toHaveProperty('positionId');
        expect(response.data[i]).toHaveProperty('customerId');
        expect(response.data[i]).toHaveProperty('name');
        expect(response.data[i]).toHaveProperty('symbol');
        expect(response.data[i]).toHaveProperty('shares');
        expect(response.data[i]).toHaveProperty('purchasePrice');
    }
});

