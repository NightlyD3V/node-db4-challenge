exports.seed = function(knex) {
    return knex('steps').insert([
        //🔫 
        {step_number: 1, step: 'rob the bank', step_id: 1},
        {step_number: 2, step: 'bribe cashiers at kwiki-mart', step_id: 1}
    ]);
};