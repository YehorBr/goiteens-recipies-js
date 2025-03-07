import { RecipeList } from "./recipeList/RecipeList";
import recipe from "../recipe.json"
import { GlobalStyle } from "GlobalStyle";

export function App(){
  return<>
  <RecipeList recipies = {recipe}/>
  <GlobalStyle/>
  </> 
};
