import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext({});

export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favoritesList, setFavoritesList] = useState([]);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            setLoading(true);
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await res.json();
            console.log(data);
            if (data?.data?.recipes) {
                setRecipeList(data?.data?.recipes);
                setLoading(false);
                setSearchParam("");
            }

        }
        catch (err) {
            setLoading(false);
            console.log(err);
            setSearchParam("");

        }
    }

    function handleAddToFavorite(getCurrentItem) {
        console.log(getCurrentItem);

        let copyFavoritesLists = [...favoritesList];
        const index = copyFavoritesLists.findIndex(item => item.id === getCurrentItem.id);

        if (index === -1) {
            copyFavoritesLists.push(getCurrentItem);
        } else {
            copyFavoritesLists.splice(index);

        }
        setFavoritesList(copyFavoritesLists);

    }




    return <GlobalContext.Provider value={{ searchParam, setSearchParam, loading, handleSubmit, recipeList, recipeDetailsData, setRecipeDetailsData, favoritesList, handleAddToFavorite }
    }>
        {children}
    </GlobalContext.Provider>;
} 