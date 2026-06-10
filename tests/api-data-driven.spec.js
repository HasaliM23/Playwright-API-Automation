const { test, expect } = require('@playwright/test');

// Loads the JSON file into the code

const testData = require('./testData.json');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('Data-Driven API Testing', () => {

  // Runs a loop through all the data in the JSON file

  testData.forEach((data, index) => {
    
    test(`Should create post successfully using data set ${index + 1}`, async ({ request }) => {
      
      const response = await request.post(`${BASE_URL}/posts`, {
        data: {
          title: data.title,
          body: data.body,
          userId: data.userId
        }
      });

      expect(response.status()).toBe(201);
      
      const responseBody = await response.json();
      
      // Checks whether the received data matches the data from the JSON file

      expect(responseBody.title).toBe(data.title);
      expect(responseBody.body).toBe(data.body);
    });

  });

});