import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  console.log(id)
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  /*   useEffect(() => {
    setLoading(true)
    const getCocktail = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        console.log(response);
        const data = await response.json();
        
        if (data.drink) {
          const {
            strDrink: name,
            strDrinThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } */
  return (
    <div>
      <h2>{id}</h2>
    </div>
  );
};

export default SingleCocktail;
