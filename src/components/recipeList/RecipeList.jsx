import { RecipeItem } from "components/recipeItem/RecipeItem"
import { FaRegClock } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { PiBowlFoodLight } from "react-icons/pi";
import {List, RecipeStyled} from "./RecipeList.styled"


export function RecipeList(props){
    return <List>
        {props.recipies.map((recipe)=>{
            return <RecipeItem
            clock = {FaRegClock}
            bowl = {PiBowlFoodLight}
            burger = {IoFastFoodOutline}
            star = {FaRegStar}
             name = {recipe.name}
             time = {recipe.time}
             servings={recipe.servings}
             calories={recipe.calories}
             difficulty={recipe.difficulty}
             image={recipe.image} />
        })}
    </List>
}