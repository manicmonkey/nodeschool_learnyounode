module.exports = function(dir, filter, callback) {

  var fs = require('fs');
  var path= require('path');

  fs.readdir(dir, function(error, filenames) {
    if (error) {
      return callback(error);
    }
    var result = [];
    filenames.forEach(function(filename) {
      if (path.extname(filename) == "." + filter)
        result.push(filename);
    });
    callback(null, result);
  });
};