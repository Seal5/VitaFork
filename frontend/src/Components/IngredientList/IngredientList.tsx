import React from 'react'
import Ingredient from "../Ingredient/Ingredient"

type Props = {}
let rating = 3

const IngredientList = (props: Props) => {
    type IngredientProps = {
      name: string;
      description: string;
      rating: number;
    };
    
    type Props = {
      ingredients: IngredientProps[];
    };

    const IngredientList: React.FC<Props> = ({ ingredients }) => {
      return (
        <div>
          {ingredients.map}
        </div>
      )
}

export default IngredientList