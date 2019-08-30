const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();
/*📑 GET: /api/recipebook/ */
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

/*🥘 GET: /api/recipebook/shoppinglist/:id */  
router.get('/shoppinglist/:id', (req, res) => {
    const { id } = req.params;
    Recipes.getShoppingList(id)
    .then((list) => {
        res.json(list);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            message: 'Error getting shoping list!'
        });
    });
});

/*🧾 GET: /api/recipebook/instructions/:id */
router.get('/instructions/:id', (req, res) => {
    const { id } = req.params;
    Recipes.getInstruction(id)
    .then((instructions) => {
        res.json(instructions);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            message: 'Error getting instructions!'
        });
    });
});

module.exports = router;