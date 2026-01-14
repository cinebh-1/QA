import { test, expect } from '@playwright/test';
import {apiClient} from '../../../utils/apiClient.js';

test('User login', async() => {

    const response = await apiClient.get('/login/john_doe/12345678');

    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
    //expect(response.status).toBe(400);
    //expect(response.statusText).toBe('Bad Request');

});
