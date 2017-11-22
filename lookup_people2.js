var knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'development',
    password : 'development',
    database : 'vagrant'
  }
});



knex.select('first_name', 'last_name', 'birthdate').from('famous_people').then(function(famous_people) {
  console.log(famous_people)
});
