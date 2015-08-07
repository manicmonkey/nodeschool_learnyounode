var http = require('http')

var server = http.createServer(function(req, res) {

  var url = require('url').parse(req.url, true)
  
  if (url.pathname == '/api/parsetime') {
    var date = new Date(url.query.iso)
    res.writeHead(200, {'content-type': 'application/json'})
    res.end(JSON.stringify({
      'hour': date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds()
    }))

  } else if (url.pathname == '/api/unixtime') {
    var date = new Date(url.query.iso)
    res.writeHead(200, {'content-type': 'application/json'})
    res.end(JSON.stringify({'unixtime': date.getTime()}))

  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(process.argv[2])
