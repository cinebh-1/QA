import { test, expect } from '@playwright/test';
import { apiClient } from '../../utils/apiClient.js';

test('Get account by id', async() => {
    
    const response = await apiClient.get('/accounts/13677');

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('customerId');
    expect(response.data).toHaveProperty('type');
    expect(response.data).toHaveProperty('balance');
});