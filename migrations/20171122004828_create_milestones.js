
exports.up = function (knex) {
  return knex.schema.createTable("milestones", (table) => {
    table.increments();
    table.string("first_name");
    table.string("last_name");
    table.date("birthdate");
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("milestones");
};