import { BiSearchAlt2 } from 'react-icons/bi'
import RecipeCard from './RecipeCard'

const RecipeSection = () => {



    return (
        <section className="recipeSection">
            <span>
            <BiSearchAlt2 size="2em" color="#DA7635" />
            <input
                type="text"
                // value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a Recipe"
            />
            </span>
            <div>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
            </div>
        </section>
    )
}

export default RecipeSection