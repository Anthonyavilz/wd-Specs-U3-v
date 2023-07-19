import './recipeDetail.css'
import salmon from '../../assets/salmon.jpg'

const RecipeDetails = () => {
    return (
        <div>
        <div className='photoBanner' 
            style={{
                background: 
                    `linear-gradient(
                    190deg,
                    rgba(0, 0, 0, 0.8),
                    rgba(0, 0, 0, 0.8)),
                    url(${salmon})`,
                backgroundSize: "cover",
                }}
        >
            <h1>Salmon</h1>
        </div>
        <main className="detailPage">
            <div className="leftSide">
                <h2>Recipe</h2>
                <ul>
                    <li>Prep Time: </li>
                    <li>Cook Time: </li>
                    <li>Serves: </li>
                </ul>
                <br/>
                <h2>Ingredients</h2>
                <ul>
                    <li>Ingredient 1</li>
                    <li>Ingredient 2</li>
                    <li>Ingredient 3</li>
                </ul>
            </div>
            <div className="rightSide">
                <h2>Instructions</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel orci porta non pulvinar neque laoreet. Interdum varius sit amet mattis. Diam quam nulla porttitor massa id. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Turpis in eu mi bibendum neque egestas. Amet luctus venenatis lectus magna fringilla. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Et magnis dis parturient montes nascetur ridiculus mus mauris. Odio tempor orci dapibus ultrices in iaculis nunc sed. Dignissim suspendisse in est ante in nibh mauris cursus. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Lobortis feugiat vivamus at augue. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Sed pulvinar proin gravida hendrerit. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Sit amet consectetur adipiscing elit.

                Velit laoreet id donec ultrices tincidunt arcu non. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Turpis tincidunt id aliquet risus feugiat in. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. In eu mi bibendum neque egestas congue quisque. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Aliquet nibh praesent tristique magna sit amet. Nunc mattis enim ut tellus. Leo in vitae turpis massa sed elementum tempus.
                </p>
            </div>
        </main>
        </div>
    )
}

export default RecipeDetails