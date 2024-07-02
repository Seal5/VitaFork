import React from 'react'
import Ingredient from "../Ingredient/Ingredient"

type IngredientProps = {
  id: number;
  name: string;
  description: string;
  rating: string;
};

type Props = {
  ingredients: IngredientProps[];
  handleDelete: (id: number) => void;
};

const IngredientList: React.FC<Props> = ({ ingredients, handleDelete }) => {
  return (
    <div>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          id={index}
          name={ingredient.name}
          description={ingredient.description}
          rating={ingredient.rating}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default IngredientList