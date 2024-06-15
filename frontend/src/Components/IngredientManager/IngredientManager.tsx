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

    const [ingredients, setIngredients] = useState<IngredientProps[]>([
        { id: 1, name: 'Sugar', description: 'Sweet ingredient', rating: 4 },
        { id: 2, name: 'Salt', description: 'Salty ingredient', rating: 3 },
        { id: 3, name: 'Butter', description: 'Creamy ingredient', rating: 5 },
      ]);

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