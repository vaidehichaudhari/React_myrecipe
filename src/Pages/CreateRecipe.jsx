import React, { useState } from "react";

const CreateRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe Submitted:", { title, ingredients, steps });
  };

  return (
    <div>
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Ingredients (comma-separated)</label>
          <input type="text" className="form-control" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Steps</label>
          <textarea className="form-control" value={steps} onChange={(e) => setSteps(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
