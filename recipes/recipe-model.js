const db = require('../data/dbConfig.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstruction

};

function getRecipes() {
    return db('recipes');
};

function getShoppingList(recipe_id) {

};

function getInstruction(recipe_id) {

};