exports.seed = function(knex) {
    return knex('ingredients').insert([
        {ingredient_name: 'Salt', amount: 9.75, instructions: 'just a pinch!', ingredient_id: 1}
    ]);
};