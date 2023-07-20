import './recipeDetail.css'
import salmon from '../../assets/salmon.jpg'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const RecipeDetails = () => {

    const {id} = useParams()

    const [recipe, setRecipe] = useState({});
    // console.log(recipe)

    useEffect(() => {
        axios
            .get(`https://recipes.devmountain.com/recipes/${id}`)
            .then(res => {
                setRecipe(res.data)
                console.log(res.data)
            })
    }, [])

    return (
        <div>
        <div className='photoBanner' 
            style={{
                background: 
                    `linear-gradient(
                    190deg,
                    rgba(0, 0, 0, 0.8),
                    rgba(0, 0, 0, 0.8)),
                    url(${recipe.image_url}) center` ,
                }}
        >
            <h1>{recipe.recipe_name}</h1>
        </div>
        <main className="detailPage">
            <div className="leftSide">
                <h2>Recipe</h2>
                <ul>
                    <li>Prep Time: {recipe.prep_time}</li>
                    <li>Cook Time: {recipe.cook_time}</li>
                    <li>Serves: {recipe.serves}</li>
                </ul>
                <br/>
                <h2>Ingredients</h2>
                {recipe.ingredients && recipe.ingredients.map(ing => {
                    return <ul>
                    <li>{ing.quantity} {ing.ingredient}</li>
                </ul>
                })}
            </div>
            <div className="rightSide">
                <h2>Instructions</h2>
                <p style={{ whiteSpace: "pre-wrap" }}>
                    {recipe.instructions && JSON.parse(recipe.instructions)}
                </p>
            </div>
        </main>
        </div>
    )
}

export default RecipeDetails