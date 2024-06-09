import React, { useState } from 'react'
import IngredientList from '../IngredientList/IngredientList'
import Search from '../Search/Search'

type Props = {}

const IngredientManager = (props: Props) => {
    const [newIngredient, setNewIngredient] = useState<any>()

    const onSearchComplete = (event : any) => {
        setNewIngredients()
    }

    return (
        <div>
            <Search onSearchComplete={onSearchComplete}/>
            <IngredientList newIngredient={newIngredient}/>
        </div>
    )
}

export default ingredientManager