import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='container mx-auto py-5 flex justify-between items-center flex-col lg:flex-row gap-5 lg:gap-0'>
            <div className='text-2xl font-semibold tracking-wider'>
                <h2>FoodRecipe</h2>
            </div>
            <form action="">
                <input type="text"
                    placeholder='Search a recipe...'
                    className='px-8 py-3 shadow-xl rounded-full outline-none border-none lg:w-96 shadow-red-100 focus:shadow-red-200' />
            </form>
            <ul className='flex gap-5'>

                <li><NavLink to="/" className="text-black hover:text-gray-700">Home</NavLink></li>

                <li><NavLink to="/Favorites" className="text-black hover:text-gray-700">Favorites</NavLink></li>


            </ul>
        </div>
    )
}

export default Navbar