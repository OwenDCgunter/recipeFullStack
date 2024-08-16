const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authmiddleware');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

// Fetch all recipes
router.get('/', recipeController.getRecipes);

// Fetch a single recipe by ID
router.get('/:id', recipeController.getRecipeById);

// Create a new recipe
router.post('/', authMiddleware, upload.single('image'), recipeController.createRecipe);

// Update a recipe by ID
router.put('/:id', authMiddleware, upload.single('image'), recipeController.updateRecipe);

// Delete a recipe by ID
router.delete('/:id', authMiddleware, recipeController.deleteRecipe);

module.exports = router;