import { BiSearchAlt2 } from 'react-icons/bi'
import RecipeCard from './RecipeCard'
import { useState } from 'react'

const RecipeSection = ({recipes}) => {

    const [search, setSearch] = useState('')

    const recipeDisplay = recipes.filter(recipe => {
        let title = recipe.recipe_name.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams)
    })
    .map(recipe => {
        return <RecipeCard recipe={recipe}/>
    })




    return (
        <section className="recipeSection">
            <span>
            <BiSearchAlt2 size="2em" color="#DA7635" />
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a Recipe"
            />
            </span>
            <div>
                {recipeDisplay}
            </div>
        </section>
    )
}

export default RecipeSection