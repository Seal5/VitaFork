import axios from "axios"

const apiKey = 'lsLVruYPiCZchptY2QbtrSSfuZC6QlepEB1fCNHF';

export const searchIngredient = async (query: string) => {
    const searchUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&api_key=${apiKey}`;
    try {
        const response = await axios.get(searchUrl);
        const fdcId = response.data.foods[0].fdcId;
        return fdcId;
    } catch (error) {
        console.error('Error searching for ingredient:', error);
    }
};

export const getIngredientDetails = async (fdcId: number) => {
    const detailsUrl = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=${apiKey}`;
    try {
        const response = await axios.get(detailsUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching ingredient details:', error);
    }
};