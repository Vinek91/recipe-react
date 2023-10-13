import React, { useState, useEffect } from 'react';
import '../styles/Api.css';
import { Link } from 'react-router-dom';



/*const urlApi = 'https://api.spoonacular.com/recipes/complexSearch';
const apiKey = 'bc68f969295f43d7ac492da92596e825';*/
 /*
            // Mettez ici l'appel à votre API en utilisant la variable 'recipe'
            fetch(`${urlApi}?query=${recipe}&maxFat=25&number=2&apiKey=${apiKey}`)
                .then((response) => response.json())
                .then((result) => {
                    console.log("voici le resultat : " + JSON.stringify(result));
                    setRecipes(result.results); // Supposons que 'results' contient les recettes
                })
                .catch((error) => {
                    console.error("Error fetching temperature data: ", error);
                });*/
                


const urlApi2 ='https://www.themealdb.com/api/json/v1/1/';
const apiKey2 = '1';

function SearchRecipe({ recipe }) {
    console.log("recipe : "+recipe)
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (recipe !== '') {
            try {
                fetch(`${urlApi2}search.php?s=${recipe}&apiKey=${apiKey2}`)
                    .then((response) => response.json())
                    .then((result) => {
                        console.log("result : "+JSON.stringify(result))
                        if (result.meals) {
                            setRecipes(result.meals);
                        } else {
                            setRecipes([]); 
                        }
                    })
                    .catch((error) => {
                        setError(error);
                    });
            } catch (error) {
                setError(error);
            }
        }
    }, [recipe]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <ul className="list-group search-recipe">
            {recipes.length > 0 ? (
                recipes.map((recipe, index) => (
                    <li
                        className="list-group-item"
                        key={index}
                    >
                         <Link to={`/${recipe.strMeal}`}>{recipe.strMeal}</Link>
                    </li>
                ))
            ) : (
                <li
                className="list-group-item"
                >
                Recettes non trouvées...
            </li>
            )}
        </ul>
        
    );
}

function RestApi({ recipe }) {
    return <SearchRecipe recipe={recipe} />
}


export default RestApi;
