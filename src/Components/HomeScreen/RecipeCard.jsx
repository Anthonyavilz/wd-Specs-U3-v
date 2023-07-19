import chorizo from '../../assets/chorizo.JPG'
import './homeScreen.css'


const RecipeCard = () => {
    return (
        <div className="recipeCard">
            <img src={chorizo} alt="" />
            <h3 className='cardText'>Chorizo con Papa</h3>
            <button className='recipeBtn'>See More</button>
        </div>
    )
}

export default RecipeCard