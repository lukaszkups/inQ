const Sequelize = require('sequelize');

// Connect to db
function connectDb() {
  return new Sequelize('inqdb', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'sqlite',

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    storage: 'db/db.sqlite'
  });
}

// Test db connection
function testDbConnection(dbObj) {
  dbObj.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    return true;
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
    return false;
  });
}

module.exports.connectDb = connectDb;
module.exports.testDbConnection = testDbConnection;
