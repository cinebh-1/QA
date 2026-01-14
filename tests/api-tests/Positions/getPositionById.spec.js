import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';

//popraviti

test('Get position by id', async() => {

    const response = await apiClient.get('/positions/13017');

    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
    expect(response.data).toHaveProperty('positionId');
    expect(response.data).toHaveProperty('customerId');
    expect(response.data).toHaveProperty('name');
    expect(response.data).toHaveProperty('symbol');
    expect(response.data).toHaveProperty('shares');
    expect(response.data).toHaveProperty('purchasePrice');
});