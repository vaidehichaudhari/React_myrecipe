import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = { id, title: "Pasta", ingredients: ["Tomato", "Basil", "Garlic"], steps: ["Boil water", "Add pasta", "Cook sauce"] };

  return (
    <div>
      <h2>{recipe.title}</h2>
      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4>Steps:</h4>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;