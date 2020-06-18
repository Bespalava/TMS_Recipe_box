
const BASE_URL = 'http://localhost:3001';

class recipeService {

    async getItems() {
        const result = await fetch(`${BASE_URL}/recipes`);

        return await result.json();
    }


    async addItem(params) {
        const result = await fetch(`${BASE_URL}/recipes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });

        return await result.json();
    }


    //*** delete all

}



export default new recipeService();