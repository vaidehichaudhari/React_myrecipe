import React from "react";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const recipes = [
    { id: 1, title: "Pasta", ingredients: ["Tomato", "Basil", "Garlic"], time: 30 },
    { id: 2, title: "Pizza", ingredients: ["Cheese", "Dough", "Tomato Sauce"], time: 40 }
  ];
  return (
    <div>
      <h2>Recipes</h2>
      <div className="row">
        {recipes.map(recipe => (
          <div key={recipe.id} className="col-md-4">
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
