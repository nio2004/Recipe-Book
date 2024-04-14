import React from 'react'
import { useState } from 'react';
const Addrecipe = () => {
    const [formData, setFormData] = useState({
        recipename: '',
        recipeimage: '',
        recipesteps: '',
        reciperequirements: '',
        rating: 0,
        category: '',
      });
    
      const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        onAddRecipe(formData);
        // Reset form fields after submission if needed
        setFormData({
          recipename: '',
          recipeimage: '',
          recipesteps: '',
          reciperequirements: '',
          rating: 0,
          category: '',
        });
      };
    
      return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white/50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="recipename" className="block text-sm font-medium text-gray-700">Recipe Name:</label>
          <input type="text" id="recipename" name="recipename" value={formData.recipename} onChange={handleChange} className="mt-1 p-2 border rounded-lg w-full bg-white/60" required />
        </div>
        <div className="mb-4">
          <label htmlFor="recipeimage" className="block text-sm font-medium text-gray-700">Recipe Image URL:</label>
          <input type="text" id="recipeimage" name="recipeimage" value={formData.recipeimage} onChange={handleChange} className="mt-1 p-2 border rounded-lg w-full bg-white/60" required />
        </div>
        <div className="mb-4">
          <label htmlFor="recipesteps" className="block text-sm font-medium text-gray-700">Recipe Steps:</label>
          <textarea id="recipesteps" name="recipesteps" value={formData.recipesteps} onChange={handleChange} className="mt-1 p-2 border rounded-lg w-full bg-white/60" rows="5" required />
        </div>
        <div className="mb-4">
          <label htmlFor="reciperequirements" className="block text-sm font-medium text-gray-700">Recipe Requirements:</label>
          <textarea id="reciperequirements" name="reciperequirements" value={formData.reciperequirements} onChange={handleChange} className="mt-1 p-2 border rounded-lg w-full bg-white/60" rows="5" required />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
          <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} className="mt-1 p-2 border rounded-lg w-full bg-white/60" required />
        </div>
        <button type="submit" className="bg-darkred  text-white py-2 px-4 rounded-lg hover:bg-blue-600">Add Recipe</button>
      </form>
    </div>
      );
}

export default Addrecipe