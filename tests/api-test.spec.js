const { test, expect } = require('@playwright/test');

// Free API URL
const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('JSONPlaceholder API Automation (JavaScript)', () => {

  // 1. GET Request Test 
  test('Should fetch list of posts successfully', async ({ request }) => {
    
    //  sent GET request to API
    const response = await request.get(`${BASE_URL}/posts/1`);
    
    // Response status 200 (OK) check 
    expect(response.status()).toBe(200);
    
    // Converts the response into JSON format

    const responseBody = await response.json();
    
    // Adds assertions to verify that the data is correct

    expect(responseBody.id).toBe(1);
    expect(responseBody.title).toBeDefined(); // Checks whether a title exists
    expect(responseBody.userId).toBeDefined();
  });

  // 2. POST Request Test (Creating new data)

  test('Should create a new post successfully', async ({ request }) => {
    
// New data (payload) to send to the API

    const newPost = {
      title: 'QA Automation Learning',
      body: 'I am practicing Playwright API testing Practically in JavaScript.',
      userId: 11
    };

    // Sends a POST request to the API with the payload

    const response = await request.post(`${BASE_URL}/posts`, {
      data: newPost
    });

// Checks whether the response status is 201 (Created)

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    // Compares the response data with the data we submitted

    expect(responseBody.title).toBe(newPost.title);
    expect(responseBody.body).toBe(newPost.body);
    expect(responseBody.id).toBeDefined(); // Makes sure a new ID was assigned by the server
  });


  // 3. PUT Request Test 
test('PUT Request - Update a post', async ({ request }) => {
  const updatedData = {
    title: 'Changed Title',
    body: 'Updated body text',
    userId: 1
  };

  // Requests to update Post 1
  const response = await request.put(`${BASE_URL}/posts/1`, {
    data: updatedData
  });

  expect(response.status()).toBe(200); // Confirms the post was updated successfully (200 OK)
  const responseBody = await response.json();
  expect(responseBody.title).toBe(updatedData.title);
});

// 4. DELETE Request Test 
test('DELETE Request - Remove a post', async ({ request }) => {

  // Requests to delete Post 1
  const response = await request.delete(`${BASE_URL}/posts/1`);

  expect(response.status()).toBe(200); // Confirms the post was deleted successfully (200 OK)
});

});

