import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';

test('Get customer accounts', async() => {
    
    const response = await apiClient.get('customers/12545/accounts');
    expect(response.status).toBe(200);

    for(let i = 0; i < response.data.length; i++) {
        expect(response.data[i]).toHaveProperty('id');
        expect(response.data[i]).toHaveProperty('customerId');
        expect(response.data[i]).toHaveProperty('type');
        expect(response.data[i]).toHaveProperty('balance');
    }
});