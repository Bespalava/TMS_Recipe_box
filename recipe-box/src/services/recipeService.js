
const BASE_URL = 'http://localhost:3001';

class recipeService {
    async fetchRecipes() {
        const result = await fetch(`${BASE_URL}/recipes`);

        return await result.json();
    }
}

export default new recipeService();