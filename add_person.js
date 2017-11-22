const args = process.argv.slice(2)

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

knex('famous_people')
  .insert({first_name: args[0], last_name: args[1], birthdate: args[2]}).then(console.log('done!'));





