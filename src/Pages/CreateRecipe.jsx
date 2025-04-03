import React, { useState } from "react";

const CreateRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, ingredients, steps });
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h2 className="text-center">Create Recipe</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Title:</label>
            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Ingredients:</label>
            <textarea className="form-control" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Steps:</label>
            <textarea className="form-control" value={steps} onChange={(e) => setSteps(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-success w-100">Submit Recipe</button>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipe;
