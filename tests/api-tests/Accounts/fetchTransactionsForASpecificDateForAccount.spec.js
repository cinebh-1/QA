import {test, expect} from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';

test('Fetch transaction for a specific date for account', async() => {
    
    const response = await apiClient.get('/accounts/13677/transactions/onDate/12-07-2025');
    expect(response.status).toBe(200);
});