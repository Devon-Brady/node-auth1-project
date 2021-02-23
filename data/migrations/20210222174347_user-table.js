
exports.up = function(knex) {
  return knex.schema
  .createTable("users", tbl =>{
      tbl.increments()
      tbl.text("username",12).unique().notNullable()
      tbl.text("password",12).notNullable()
  })
};

exports.down = function(knex) {
  
};
