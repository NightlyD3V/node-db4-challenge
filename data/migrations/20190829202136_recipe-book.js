
exports.up = function(knex) {
    //🔖 RECIPES TABLE
    return knex.schema
    .createTable('recipes', tbl => {
    tbl.increments();
    tbl.text('recipe_name', 128)
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
        //🔑Foreign key
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes');
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredients') 
    .dropTableIfExists('recipes');
};
