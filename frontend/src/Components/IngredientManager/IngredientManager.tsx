import React, { useState } from 'react'
import IngredientList from '../IngredientList/IngredientList'
import Search from '../Search/Search'

type Props = {}

let idCounter = 0;

// Will have to fix with backend
const generateId = () => {
    return ++idCounter;
};

const IngredientManager: React.FC = (props: Props) => {
    type IngredientProps = {
        id: number;
        name: string;
        description: string;
        rating: string;
    };

    const [ingredients, setIngredients] = useState<IngredientProps[]>([]);

    const onSearchComplete = (ingredient: any) => {
        const newIngredient = { id: generateId(), name: ingredient.name, description: ingredient.description, rating: ingredient.rating };
        setIngredients([...ingredients, newIngredient]);
    }

    const onDelete = (id: number) => {
        setIngredients(ingredients.filter(ingredient => ingredient.id !== id));
    };

    return (
        <div>
            <Search onSearchComplete={onSearchComplete}/>
            <IngredientList ingredients={ingredients} handleDelete={onDelete} />
        </div>
    )
}

export default IngredientManager