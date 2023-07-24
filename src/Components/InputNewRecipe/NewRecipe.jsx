import './newRecipe.css'
// import './versionTwo.css'
import { Formik } from 'formik'
import { useState } from 'react'
import axios from 'axios'

const NewRecipe = () => {

    const [ingredients, setIngredients] = useState([])
    const [name, setName] = useState('')
    const [quantity, setQuatity] = useState('')

    const addIngredient = () => {
        console.log('added ingredient')
        setIngredients([...ingredients, {name, quantity}])
        setName('')
        setQuatity('')
    }

    const initialValues = {
        type: '',
        recipeName: '',
        imageURL: '',
        prepTime: '',
        cookTime: '',
        serves: '',
        ingredients: [],
        instructions: ''
    }

    const onSubmit = (values) => {
        values.ingredients = ingredients
        console.log(values)
        axios
            .post(`https://recipes.devmountain.com/recipes`, values)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="formContainer">
            <div className="recipeForm">
                <h1>Tell us your Recipe!</h1>
                <Formik initialValues={initialValues} onSubmit={(values, {resetForm}) => {
                    onSubmit(values)
                    resetForm()
                    }}>
                    {({values, handleChange, handleSubmit, handleReset}) => {
                        return <form onSubmit={handleSubmit}>
                            <div className='firstRow'>
                                <input type="text" placeholder="Name" value={values.recipeName} onChange={handleChange} name='recipeName' />
                                <input placeholder="Image URL" value={values.imageURL} onChange={handleChange} name='imageURL' />
                            </div>
                            <div className='secondRow'>
                                <input type="radio" value='Cook' onChange={handleChange} name='type'/>
                                <label>Cook</label>
                                <input type="radio" value='Bake' onChange={handleChange} name='type'/>
                                <label>Bake</label>
                                <input type="radio" value='Drink' onChange={handleChange} name='type'/>
                                <label>Drink</label>
                            </div>
                            <div className='thirdRow'>
                                <input type="text" placeholder="Prep Time" value={values.prepTime} onChange={handleChange} name='prepTime' />
                                <input type="text" placeholder="Cook Time" value={values.cookTime} onChange={handleChange} name='cookTime'/>
                                <input type="text" placeholder="Serves" value={values.serves} onChange={handleChange} name='serves'/>
                            </div>
                            <div className='fourthRow'>
                                <input type="text" placeholder="Ingredient" value={name} onChange={(e) => setName(e.target.value)} name='ingredients'/>
                                <input type="text" placeholder="Quantity" value={quantity} onChange={(e) => setQuatity(e.target.value)} name='quantity'/>
                            </div>
                            <div className='fifthRow'>
                                <button type='button' onClick={addIngredient} >Add Another</button>
                            </div>
                            <div className='sixthRow'>
                                <textarea placeholder="What are the instructions?" rows={5} value={values.instructions} onChange={handleChange} name='instructions'/>
                            </div>
                            <div className='lastRow'>
                                <button type='submit' >Submit</button>
                            </div>
                        </form>
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default NewRecipe