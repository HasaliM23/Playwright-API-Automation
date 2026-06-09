const {test,expect} = require('@playwright/test');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('JSONPlaceholder API Automation (JavaScript)',() =>{

    test ('Get Request Test',async ({request}) =>{

        const response = await request.get(`${BASE_URL}/posts/1`);

        expect(response.status()).toBe(200);

        const reponseBody = await response.json();

        expect(responseBody.id).toBe(1);
        expect(responseBody.title).toBeDefined();
        expect(responseBody.userId).toBeDefined();
    });

    test("Post request test",async ({request}) =>{

        const newpost = {

            title: 'QA Automation Learning',
            body: 'I am practicing Playwright API testing Practically in JavaScript.',
            userId: 11
        } ;
        
        const response = await request.post(`${BASE_URL}/posts`,{
            data: newpost
        });

        expect(response.status()).toBe(201);
        const responseBody = await response.json();

        expect(responseBody.title).toBe(newpost.title);
        expect(reponseBody.body).toBe(newpost.body);
        expect(responseBody.id).toBeDefined();


//Put Request 

test('put request test',async ({request}) =>{

    const updatedData = {
        title: 'Changed Title',
        body: 'Updated body text',
        userId: 1
    };

    const response = await request.put(`${BASE_URL}/posts/1`,{
        data: updatedData
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.title).toBe(updatedData.title);
    

    });

//Delete Request

test('Delete Request - Delete a post', async ({ request }) => {

    const response = await request.delete(`${BASE_URL}/posts/1`);

    expect(response.status()).toBe(200);

});



    });







        
});
