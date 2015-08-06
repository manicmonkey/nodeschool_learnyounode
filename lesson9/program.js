var http = require('http')
var bl = require('bl')

var responses = [];
var count = 0;

function printResults() {
  responses.forEach(function(value) {
    console.log(value);
  });
}

var urls = process.argv.slice(2);

urls.forEach(function(url, index) {
  http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
      if (err) {
        return console.error(err);
      }

      responses[index] = data.toString();
      count++;

      if (count == 3)
        printResults();
    }));
  });
});
