import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/HomeScreen/Header'
import Footer from './Components/HomeScreen/Footer'
import HomeScreen from './Components/HomeScreen/HomeScreen'
import NewRecipe from './Components/InputNewRecipe/NewRecipe'
import RecipeDetails from './Components/Details/RecipeDetails'

function App() {
  return (
    <>
      <div>
        <Header/>
          <Routes>
            <Route path='/' element={<HomeScreen/>} />
            <Route path='/newRecipe' element={<NewRecipe/>} />
            <Route path='/recipe/:id' element={<RecipeDetails/>} />
          </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
