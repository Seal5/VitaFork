import axios from "axios"
const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = 'AIzaSyB-o7bSi68eviL4f3DUpPiNaojcg5W9nmE';
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

export const getIngredientDetails = async (name: string) => {
    const response = {name: "", description: "", rating: ""}

    const promptD = `Write a brief less than 100 word description of the food ingreident: ${name} (if not a food ingredient just return "Not a Food Ingredient")`
    const resultD = await model.generateContent(promptD)
    response.description = await resultD.response.text();

    const promptS = `Give single numerical star rating out of 5 for this food ingredient as in terms of health: ${name} (if not a food ingredient just return "Not a Food Ingredient")`
    const resultS = await model.generateContent(promptS)
    response.rating = await resultS.response.text();

    return response
}

// import axios from "axios"

// export const getIngredient = async (name: string) => {
//     const searchURL = 'https://world.openfoodfacts.org/cgi/search.pl?search_terms=${name}&search_simple=1&action=process&json=1'
//     try {
//         const response = await axios.get(searchURL); 
//         if (response.data.length > 0) {
//             return response.data.products[0]
//         } else {
//             throw new Error('Ingredients not found')
//         }
//     } catch (error) {
//         console.error('Error searching for ingredient', error)
//     }
// }