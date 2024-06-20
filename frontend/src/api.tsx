import axios from "axios"

export const getIngredient = async (name: string) => {
    const searchURL = 'https://world.openfoodfacts.org/cgi/search.pl?search_terms=${name}&search_simple=1&action=process&json=1'
    try {
        const response = await axios.get(searchURL); 
        if (response.data.length > 0) {
            return response.data.products[0]
        } else {
            throw new Error('Ingredients not found')
        }
    } catch (error) {
        console.error('Error searching for ingredient', error)
    }
}