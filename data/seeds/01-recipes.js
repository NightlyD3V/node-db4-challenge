exports.seed = function(knex) {
    return knex('recipes').insert([
        //🐔 
        {recipe_name: 'Chicken Marsala', recipe_id: 1},
        //🐟 
        {recipe_name: 'Crispy Salmon', recipe_id: 2}
    ]);
};