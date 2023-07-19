import { useState, useEffect } from 'react'
import './homeScreen.css'
import axios from 'axios'
import AdBanner from './AdBanner'
import RecipeSection from './RecipeSection'



const HomeScreen = () => {

    const [recipes, setRecipes] = useState([])

    const getRecipes = () => {
        axios
            .get('https://recipes.devmountain.com/recipes')
            .then(res => {
                setRecipes(res.data)
                console.log(res.data)
            })
    }

    useEffect(() => {
        getRecipes()
    }, [])

    return (
        <div>
            <AdBanner/>
            <RecipeSection/>
        </div>
    )
}

export default HomeScreen