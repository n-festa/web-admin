export type IngredientType = {
  name?: number | string;
} 

const Ingredient = ({name} : IngredientType) =>{

    return(
        <span className="ms-1">
            {name} ,
        </span>
    );
}

export default Ingredient;

