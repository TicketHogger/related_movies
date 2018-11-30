const redis = require('redis');
const client = redis.createClient({
  host: '18.220.182.180'
});

client.on('error', function (err) {
  console.log('Error ' + err)
})

// get all movies for the given actor
const getAll = (actor, callback) => {

  client.get(actor, (err, results) => {
    if (err) {
      callback(err);
    } else {
      console.log('results from connection.js line 17', results);
      const resultsJSON = JSON.parse(results);
      callback(null, resultsJSON);
    }
  });
};

const addMovies = (actor, stringifiedMovies, callback) => {
  client.set(actor, stringifiedMovies, redis.print, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

module.exports = { getAll, addMovies };