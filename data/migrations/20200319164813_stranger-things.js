
exports.up = function(knex) {
  return knex.schema
  .createTable("characters", table => {
    table.increments()
    table.varchar("name").notNullable().unsigned();
    table.integer("age");
    table.varchar("city")
  })
  .createTable("episodes", table => {
      table.increments();
      table.varchar("name").notNullable();
      table.integer("season").unsigned().notNullable()

  })
  .createTable("character_episodes", table => {
      table.increments();
      table
        .integer("character_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("characters")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    table
        .integer("episode_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("episodes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
  })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("character_episodes")
        .dropTableIfExists("episodes")
        .dropTableIfExists("character")
  
};
