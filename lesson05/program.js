var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(error, filenames) {
  if (error)
    return;
  var filter = process.argv[3];
  for (i in filenames) {
    var line = filenames[i];
    if (path.extname(line) == "." + filter)
      console.log(line);
  }
});