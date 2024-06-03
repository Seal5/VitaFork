import React from 'react';
import IngredientList from '../IngredientList/IngredientList';

type Props = {
  name: string;
  description: string;
  rating: number; 
}

const Ingredient = ({ name, description, rating}: Props) => {
  const getStars = (rating: number) => {
    let stars = '';
    for (let i = 0; i < rating; i++){
      stars += '★';
    }
    return stars
  }
  return (
    <div>
      <h3>Ingredient: {name}</h3>
      <p>Description: {description}</p>
      <p>Rating: {getStars(rating)}</p>
    </div>
  )
}

export default Ingredient;