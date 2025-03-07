import {Item,DishDetails, Image, Title, Info} from './RecipeItem.styled'
import { Difficulty } from 'components/Difficulty/Difficulty'

export function RecipeItem ({clock:Clock, bowl:Bowl, burger:Burger, star:Star, name, time, servings, calories, difficulty, image}){
    return <Item>
        <Image src={image} alt={name} width="300px" />
        <Title>{name}</Title>
        <DishDetails>
            <Info><Clock size={20}/>{time} min</Info>
            <Info><Bowl size={20}/>{servings} servings</Info>
            <Info><Burger size={20}/>{calories} calories</Info>
        </DishDetails>
        <Difficulty difficulty={difficulty}/>
    </Item>
}