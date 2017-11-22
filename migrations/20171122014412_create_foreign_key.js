exports.up = function(knex) {
  return knex.schema.table("milestones", (table) => {
    table.string("famous_person_id");
  });
};
exports.down = function(knex) {
  return knex.schema.table("users", (table) => {
    table.dropColumns("famous_person_id");
  });
};