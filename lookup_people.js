const pg = require("pg");
const settings = require("./settings"); // settings.json
const args = process.argv.slice(2)

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

// client.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }
//   client.query("SELECT * FROM famous_people WHERE first_name = $1 OR last_name = $1", [args[0]], (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     }
//    console.log(result.rows)
//     client.end();
//   });
// });

/**
 * Function to search famous people by first or last name
 * @param {string} name
 * @param {function} cb
 */

function lookUpPeopleByName(name, cb) {
  client.query("SELECT * FROM famous_people WHERE first_name = $1 OR last_name = $1", [name], cb);
}

client.connect((err) => {
  if (err) {
    console.error("Connection Error", err);
    return;
  }
  lookUpPeopleByName(args[0], (err,result) => {
      if (err) {
        console.error("error running query", err);
        return;
      }
      console.log(result.rows[0]);
      client.end();
  });
});




