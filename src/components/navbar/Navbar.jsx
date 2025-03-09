import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context/context'
const Navbar = () => {
    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext)
    console.log(searchParam);


    return (
        <div className='container mx-auto py-5 flex justify-between items-center flex-col lg:flex-row gap-5 lg:gap-0'>
            <h2 className='text-2xl font-semibold tracking-wider'>
                <NavLink to={"/"} className="text-black hover:text-gray-700 duration-500">FoodRecipe</NavLink>
            </h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Search a recipe...'
                    className='px-8 py-3 shadow-xl rounded-full outline-none border-none lg:w-96 shadow-red-100 focus:shadow-red-200'
                    value={searchParam}
                    onChange={(e) => setSearchParam(e.target.value)} />
            </form>
            <ul className='flex gap-5'>

                <li><NavLink to={"/"} className="text-black hover:text-gray-700">Home</NavLink></li>

                <li><NavLink to={"/Favorites"} className="text-black hover:text-gray-700">Favorites</NavLink></li>


            </ul>
        </div>
    )
}

export default Navbar