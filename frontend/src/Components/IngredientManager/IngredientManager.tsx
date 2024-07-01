import React, { useState } from 'react'
import IngredientList from '../IngredientList/IngredientList'
import Search from '../Search/Search'

type Props = {}

const IngredientManager: React.FC = (props: Props) => {
    type IngredientProps = {
        id: number;
        name: string;
        description: string;
        rating: number;
    };

    const [ingredients, setIngredients] = useState<IngredientProps[]>([]);

    const onSearchComplete = (event : any) => {
        const newIngredient = { id: Date.now(), name: event.target.value, description: 'New ingredient', rating: 3 };
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