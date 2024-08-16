const Recipe = require('../models/Recipe');
const mongoose = require('mongoose'); 
const { v4: uuidv4 } = require('uuid');
const bucket = require('../firebaseadmin').bucket;
// Fetch all recipes
exports.getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch a single recipe by ID
exports.getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createRecipe = async (req, res) => {
    let imageUrl = null;

    try {
        // Check if a file is uploaded
        if (req.file) {
            const blob = bucket.file(`${uuidv4()}_${req.file.originalname}`);
            const blobStream = blob.createWriteStream({
                metadata: {
                    contentType: req.file.mimetype,
                },
            });

            await new Promise((resolve, reject) => {
                blobStream.on('finish', async () => {
                    try {
                        const signedUrl = await blob.getSignedUrl({
                            action: 'read',
                            expires: '03-09-2491',
                        });
                        imageUrl = signedUrl[0];  // Assign the first element of signedUrl array
                        resolve();
                    } catch (error) {
                        reject(error);
                    }
                });

                blobStream.on('error', (error) => reject(error));

                blobStream.end(req.file.buffer);
            });
        }

        const newRecipe = new Recipe({
            ...req.body,
            userId: req.user.uid,
            image: imageUrl, // Save the image URL to the database
        });

        await newRecipe.save();
        res.json(newRecipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Update a recipe by ID
exports.updateRecipe = async (req, res) => {
    try {
        const userId = req.user.uid;
        const updatedRecipe = await Recipe.findOneAndUpdate(
            { _id: req.params.id, userId: userId },
            req.body,
            { new: true }
        );
        if (!updatedRecipe) {
            return res.status(404).json({ message: 'Recipe not found or not authorized' });
        }
        res.json(updatedRecipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a recipe by ID
exports.deleteRecipe = async (req, res) => {
    try {
        const userId = req.user.uid;
        const recipe = await Recipe.findOneAndDelete({ _id: req.params.id, userId: userId });
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found or not authorized' });
        }
        res.json({ message: 'Recipe deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
