import React, { useState } from 'react'
import { searchIngredient, getIngredientDetails } from '../../api';

type Props = {}

type Props = {
    onSearchComplete: (ingredient: any) => void;
};


const Search : React.FC<Props> = (props: Props) => {
    const [search,  setSearch] = useState<string>("");
    const [ingredientDetails, setIngredientDetails] = useState<any>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const onClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const fdcId = await searchIngredient(search);
        if (fdcId) {
            const details = await getIngredientDetails(fdcId);
            setIngredientDetails(details);
        }
    };

    return (
        <div>
            <input value={search} onChange={(event) => handleChange(event)}></input>
            <button onClick={(event) => onClick(event)}>Search</button> 
            {ingredientDetails && (
                <div>
                    <h2>{ingredientDetails.description}</h2>
                    <p>Category: {ingredientDetails.foodCategory}</p>
                    <p>Data Type: {ingredientDetails.dataType}</p>
                </div>
            )}
        </div>
    )
}

export default Search