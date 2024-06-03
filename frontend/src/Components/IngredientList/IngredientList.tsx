import React from 'react'
import Ingredient from "../Ingredient/Ingredient"

type Props = {}
let rating = 3

const IngredientList = (props: Props) => {
  return (
    <div>
      <Ingredient name="Red-40" description="Very Bad for You" rating={rating}/>
      <Ingredient name="Red-40" description="Very Bad for You" rating={rating}/>
      <Ingredient name="Red-40" description="Very Bad for You" rating={rating}/>
    </div>
  )
}

export default IngredientList