import { test, expect } from '@playwright/test';
import { apiClient } from '../../../utils/apiClient.js';
import { queryParams10 } from '../../../utils/queryParameters.js';

//popraviti 

test('Get position history by id within a date range', async() => {

    const response = await apiClient.get('/positions/', null, {
        params: queryParams10
    })

  /*   expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
    expect(response.status).toBe(400);
    expect(response.statusText).toBe('Bad Request'); */
});