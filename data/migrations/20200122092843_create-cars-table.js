exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.string("make", 200).notNullable();
    tbl.string("model", 200).notNullable();
    tbl
      .string("VIN", 200)
      .unique()
      .notNullable();
    tbl.integer("mileage", 200).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("cars");
};
