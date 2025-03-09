import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context/context';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { recipeDetailsData, setRecipeDetailsData, favoritesList, handleAddToFavorite } = useContext(GlobalContext);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        async function getRecipeDetails() {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            const data = await response.json();

            console.log(data);
            if (data?.data)
                setRecipeDetailsData(data?.data);

        }
        getRecipeDetails();
    }, [id, setRecipeDetailsData]);
    return (
        <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 p-10'>
            <div className='row-start-2 lg:row-start-auto'>
                <div className='h-96 overflow-hidden rounded-xl group'>
                    <img src={recipeDetailsData?.recipe?.image_url} alt="Recipe Image" className='w-full h-full object-cover block group-hover:scale-105 duration-500' />
                </div>
            </div>
            <div className='flex-col gap-3'>
                <span className='text-sm text-cyan-700 font-medium'>{recipeDetailsData?.recipe?.publisher}</span>
                <h3 className='font-bold text-2xl truncate text-black'>{recipeDetailsData?.recipe?.title}</h3>

                <div className=''>
                    <button className='p-3 mb-4 px-8 rounded-lg bg-black text-white text-sm uppercase font-medium tracking-wider mt-3  inline-block shadow-md hover:scale-105 duration-500'
                        onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}>
                        {
                            favoritesList && favoritesList.length > 0 && favoritesList.findIndex((item) => item.id === recipeDetailsData?.recipe?.id) !== -1
                                ? "Remove from Favorites" : "Add to Favorites"
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;