const db = require('../data/dbConfig.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstruction
};

//🔖
function getRecipes() {
    return db('recipes as r')
    .join('ingredients as i', 'i.ingredient_id', 'r.id')
    .join('steps as s', 's.step_id', 'r.id')
    .select('r.recipe_name', 's.step_number', 
    's.step', 'i.ingredient_name', 
    'i.amount', 'i.instructions');
};
//🥫
function getShoppingList(recipe_id) {
    return db('ingredients as i')
    .join('recipes as r', 'i.ingredient_id', 'r.id')
    .select('i.ingredient_name', 'i.amount', 'i.instructions')
    .where({ recipe_id });
};
//🧾 
function getInstruction(step_id) {
    return db('steps as s')
    .join('recipes as r', 's.step_id', 'r.recipe_id')
    // .select('s.step_number', 's.step')
    .where(step_id)
};