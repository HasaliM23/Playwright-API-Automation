const { test, expect } = require('@playwright/test');

// හැමදාම වැඩ කරන නොමිලේ දෙන API URL එක
const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('JSONPlaceholder API Automation (JavaScript)', () => {

  // 1. GET Request Test එක (දත්ත ලබා ගැනීම)
  test('Should fetch list of posts successfully', async ({ request }) => {
    
    // API එකට GET request එකක් යවනවා
    const response = await request.get(`${BASE_URL}/posts/1`);
    
    // Response status එක 200 (OK) ද කියලා බලනවා
    expect(response.status()).toBe(200);
    
    // ආපු response එක JSON format එකට හරවනවා
    const responseBody = await response.json();
    
    // ඇතුළේ තියෙන data නිවැරදිද කියලා Assertions දානවා
    expect(responseBody.id).toBe(1);
    expect(responseBody.title).toBeDefined(); // Title එකක් තියෙන්නම ඕනේ
    expect(responseBody.userId).toBeDefined();
  });

  // 2. POST Request Test එක (අලුත් දත්තයක් සෑදීම)
  test('Should create a new post successfully', async ({ request }) => {
    
    // API එකට යවන අලුත් දත්ත (Payload)
    const newPost = {
      title: 'QA Automation Learning',
      body: 'I am practicing Playwright API testing Practically in JavaScript.',
      userId: 11
    };

    // API එකට POST request එකක් යවනවා payload එකත් එක්ක
    const response = await request.post(`${BASE_URL}/posts`, {
      data: newPost
    });

    // Response status එක 201 (Created) ද කියලා බලනවා
    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    // අපිට ආපු රිසල්ට් එකයි අපි යවපු ඒවායි සමානද බලනවා
    expect(responseBody.title).toBe(newPost.title);
    expect(responseBody.body).toBe(newPost.body);
    expect(responseBody.id).toBeDefined(); // සර්වර් එකෙන් අලුත් ID එකක් දීලා තියෙන්න ඕනේ
  });


  // 3. PUT Request Test (දත්ත වෙනස් කිරීම)
test('PUT Request - Update a post', async ({ request }) => {
  const updatedData = {
    title: 'Changed Title',
    body: 'Updated body text',
    userId: 1
  };

  // අපි 1 වෙනි පෝස්ට් එක (posts/1) වෙනස් කරන්න කියලා PUT request එකක් යවනවා
  const response = await request.put(`${BASE_URL}/posts/1`, {
    data: updatedData
  });

  expect(response.status()).toBe(200); // සාර්ථකව Update වුණාම එන්නේ 200
  const responseBody = await response.json();
  expect(responseBody.title).toBe(updatedData.title);
});

// 4. DELETE Request Test (දත්ත මකා දැමීම)
test('DELETE Request - Remove a post', async ({ request }) => {
  // 1 වෙනි පෝස්ට් එක delete කරන්න කියලා කියනවා
  const response = await request.delete(`${BASE_URL}/posts/1`);

  expect(response.status()).toBe(200); // සාර්ථකව Delete වුණාම සාමාන්‍යයෙන් 200 හෝ 204 එනවා
});

});

