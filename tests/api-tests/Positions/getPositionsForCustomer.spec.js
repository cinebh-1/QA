import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';

test('Get positions for customer', async() => {

    const response = await apiClient.get('/customers/12545/positions');

    expect(response.status).toBe(200);
    //expect(response.status).toBe(404);
});

