import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';

test('Get customer details', async() => {

    const response = await apiClient.get('customers/12545');

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('firstName');
    expect(response.data).toHaveProperty('lastName');
    expect(response.data).toHaveProperty('address');
    expect(response.data.address).toHaveProperty('street');
    expect(response.data.address).toHaveProperty('city');
    expect(response.data.address).toHaveProperty('state');
    expect(response.data.address).toHaveProperty('zipCode');
    expect(response.data).toHaveProperty('phoneNumber');
    expect(response.data).toHaveProperty('ssn');
});