import React from 'react';

type Props = {
  id: number;
  name: string;
  description: string;
  rating: string; 
  onDelete: (id: number) => void;
}

const Ingredient : React.FC<Props>  = ({ id, name, description, rating, onDelete}: Props): JSX.Element => {
  const getStars = (rating: number) => {
    let stars = '';
    for (let i = 0; i < rating; i++){
      stars += '★';
    }
    return stars
  }
  // getStars(rating)

  return (
    <div>
      <h3>Ingredient: {name}</h3>
      <p>Description: {description}</p>
      <p>Rating: {rating}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

export default Ingredient;