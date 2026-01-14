import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';

test('Stop JMS listener', async() => {

    const response = await apiClient.post('/shutdownJmsListener', null);

    expect(response.status).toBe(204);
    expect(response.statusText).toBe('No Content');
});