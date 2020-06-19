const BASE_URL = 'http://localhost:3001';

class recipeService {
    // async fetchRecipes() {

    async getItems() {
        const result = await fetch(`${BASE_URL}/recipes`);

        return await result.json();
    }


    async addItem() {
        const result = await fetch(`${BASE_URL}/recipes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify()
        });

        return await result.json();
    }


    async deleteItems(params) {

        const result = await fetch(`${BASE_URL}/recipes`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

        // const result = await fetch(`${BASE_URL}/recipes`);

        return await result.json();
    }
}

export default new recipeService();