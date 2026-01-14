import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';

test('Initialize database', async() => {

    const response = await apiClient.post('/initializeDB', null);

    expect(response.status).toBe(204);
    expect(response.statusText).toBe('No Content');
});