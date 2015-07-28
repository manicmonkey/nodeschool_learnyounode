var filefilter = require('./filefilter');

var dir = process.argv[2];
var filter = process.argv[3];

filefilter(dir, filter, function(err, data) {
  if (err) {
    console.error("Got error: " + err);
  } else {
    data.forEach(function(line) {
      console.log(line);
    });
  }
});