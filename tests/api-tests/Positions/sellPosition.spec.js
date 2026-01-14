import { test, expect } from '@playwright/test'; 
import { apiClient } from '../../../utils/apiClient.js';
import { queryParams11 } from '../../../utils/queryParameters.js';

//popraviti
test('Sell a position', async() => {

    const response = await apiClient.post('/customers/12545/sellPosition', null, {
        params: queryParams11
    })
});


