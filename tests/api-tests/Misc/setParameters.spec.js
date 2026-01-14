import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';

test('Set parameters', async() => {
    
    const response = await apiClient.post('setParameter/john_doe/WayneDoe', null);

    expect(response.status).toBe(204);
    expect(response.statusText).toBe('No Content');
});