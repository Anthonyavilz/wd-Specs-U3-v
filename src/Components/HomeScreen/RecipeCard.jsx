import chorizo from '../../assets/chorizo.JPG'
import './homeScreen.css'
import { useNavigate } from 'react-router-dom' 


const RecipeCard = ({recipe}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }

    // return (
    //     <div className="recipeCard">
    //         <img src={chorizo} alt="" />
    //         <h3>Chorizo con Papa</h3>
    //         <button onClick={handleClick} >See More</button>
    //     </div>
    // )

    return (
        <div className="recipeCard">
            <img src={recipe.image_url} alt="" />
            <h3>{recipe.recipe_name}</h3>
            <button onClick={handleClick} >See More</button>
        </div>
    )
}

export default RecipeCard