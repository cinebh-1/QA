import {test, expect} from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';

test("Fetch transactions for date range for account", async() => {
    
    const response = await apiClient.get('/accounts/12567/transactions/fromDate/12-08-2025/toDate/12-09-2025');
    expect(response.status).toBe(200);
});