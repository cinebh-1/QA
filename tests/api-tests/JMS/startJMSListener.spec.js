import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';

test('Start JMS Listener', async() => {

    const response = await apiClient.post('/startupJmsListener', null);

    expect(response.status).toBe(204);
    expect(response.statusText).toBe('No Content');
});
