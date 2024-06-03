import React from 'react'
import Ingredient from "../Ingredient/Ingredient"

type Props = {}

const IngredientList = (props: Props) => {
  return (
    <div>
      <Ingredient name="Red-40" description="Very Bad for You" rating={2}/>
      <Ingredient name="Red-40" description="Very Bad for You" rating={0}/>
      <Ingredient name="Red-40" description="Very Bad for You" rating={0}/>
    </div>
  )
}

export default IngredientList