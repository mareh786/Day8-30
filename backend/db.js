const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./members.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS members (name TEXT UNIQUE)");
});

const addOrCheckMember = (name, callback) => {
  db.get("SELECT name FROM members WHERE name = ?", [name], (err, row) => {
    if (err) return callback(err);

    if (row) {
      callback(null, "You are an existing member. Thanks for being a member!");
    } else {
      db.run("INSERT INTO members (name) VALUES (?)", [name], (err) => {
        if (err) return callback(err);
        callback(null, "Welcome to the club!");
      });
    }
  });
};

module.exports = { addOrCheckMember };
