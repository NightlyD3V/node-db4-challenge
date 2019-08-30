const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then((recipes) => {
        res.json(recipes);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            message: 'Error finding all recipes!'
        });
    });
});

module.exports = router;