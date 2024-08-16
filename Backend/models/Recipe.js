const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
    cookingTime: { type: Number, required: true },
    difficulty: { type: String, required: true },
    userId: { type: String, ref: 'User', required: true },
    image: { type: String },
});

module.exports = mongoose.model('Recipe', RecipeSchema);