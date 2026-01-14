import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';


test('Fetch transactions by month and type for account', async() => {

   const response = await apiClient.get('/accounts/13677/transactions/month/December/type/1');

   expect(response.status).toBe(200);
   expect(response.data[0]).toHaveProperty('id');
   expect(response.data[0]).toHaveProperty('accountId');
   expect(response.data[0]).toHaveProperty('type');
   expect(response.data[0]).toHaveProperty('date');
   expect(response.data[0]).toHaveProperty('amount');
   expect(response.data[0]).toHaveProperty('description');
});