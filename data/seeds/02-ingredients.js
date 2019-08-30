exports.seed = function(knex) {
    return knex('ingredients').insert([
        //🧂 
        {ingredient_name: 'Salt', amount: 9.75, instructions: 'just a pinch!', ingredient_id: 1},
        //🐔 
        {ingredient_name: 'Chicken', amount: 12.00, instructions: 'Bake at 200deg for 5 hours', ingredient_id: 1}
    ]);
};