import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <p className="card-text">{recipe.ingredients.join(", ")}</p>
        <p className="card-text"><small className="text-muted">Cooking time: {recipe.time} mins</small></p>
        <a href={`/recipe/${recipe.id}`} className="btn btn-primary">View Recipe</a>
      </div>
    </div>
  );
};

export default RecipeCard;
