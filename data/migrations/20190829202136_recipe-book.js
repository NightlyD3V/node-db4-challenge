
exports.up = function(knex) {
    //🔖 RECIPES TABLE
    return knex.schema
    .createTable('recipes', tbl => {
    tbl.increments();
    tbl.text('recipe_name', 128)
        .notNullable();
    tbl.integer('recipe_id')
        .unique()
        .notNullable();
  })
    //🥫 INGREDIENTS TABLE
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.text('ingredient_name', 128)
            .unique()
            .notNullable();
        tbl.float('amount')
        tbl.text('instructions', 128)
            .notNullable();
        //🔑Foreign Key
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes');
  })
    //🕵 STEPS TABLE
    .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('step_number')
            .unique()
            .notNullable()
        tbl.text('step', 128)
            .notNullable();
        //🔑Forein Key 
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes');  
    });
};
 
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredients') 
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes');
};
