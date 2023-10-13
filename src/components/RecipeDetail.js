import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/RecipeDetail.css';


function RecipeDetails() {
    
  const { recipeName } = useParams(); // Récupère le paramètre de l'URL
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    const urlApi2 = 'https://www.themealdb.com/api/json/v1/1/';
    const apiKey2 = '1';

    fetch(`${urlApi2}search.php?s=${recipeName}&apiKey=${apiKey2}`)
      .then((response) => response.json())
      .then((result) => {
        if (result.meals && result.meals.length > 0) {
          setRecipeDetails(result.meals[0]);
        } else {
          setRecipeDetails(null);
        }
      })
      .catch((error) => {
        console.error('Error fetching recipe details: ', error);
      });
  }, [recipeName]);

// ... (votre code existant)

return (
    <div className="container-detail">
      {recipeDetails ? (
        <div>
          <h1>{recipeDetails.strMeal}</h1>
                <img src={recipeDetails.strMealThumb} alt={recipeDetails.strMeal} style={{width:"250px",height:"250px", borderRadius:"15px",margin:"2em"}}/>
              <div style={{display:"flex"}}>
                <h2>Ingrédients</h2><hr></hr>
                
              </div>
              <ul className="list-group-ingredient">
              {Object.keys(recipeDetails).map(key => {
                if (key.includes('strIngredient') && recipeDetails[key]) {
                  return (
                    <li key={key} className="list-group-item-ingredient">
                      <img
                        src={`https://www.themealdb.com/images/ingredients/${recipeDetails[key]}.png`}
                        alt='notfound'
                        className="ingredient-img"
                      />
                      <div>{recipeDetails[key]}</div>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            <hr></hr>
            <br/>

              <p className="">{recipeDetails.strInstructions}</p>
              <a href="/" className="btn btn-outline-warning">Retour à l'accueil</a>
            </div>


      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
  
  // ... (votre code existant)
  
  
}

export default RecipeDetails;
