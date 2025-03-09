import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/context'
import RecipeItem from '../../components/recipeItem/RecipeItem'

const Home = () => {
    const { recipeList, loading } = useContext(GlobalContext)
    if (loading) return <div className='text-center text-2xl animate-pulse duration-500 '>Loading... Please wait!</div>
    return (
        <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
            {
                recipeList && recipeList.length > 0
                    ?
                    recipeList.map((item) => <RecipeItem key={item.id || item.title} item={item} />)
                    : <div>
                        <p>
                            Nothing to show. Please search something.
                        </p>
                    </div>
            }
        </div>
    )
}

export default Home