import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='navBar'>
            <h2>DevMountain Eatery</h2>
            <nav>
                <Link to='' ><button>Home</button></Link>
                <Link to='/newRecipe' ><button>Add Recipe</button></Link>
            </nav>
        </header>
    )
}

export default Header