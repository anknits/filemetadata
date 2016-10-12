var express = require("express")
var multer = require("multer")
var path = require("path")
var app = express()
var upload = multer()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function (req, res){
    res.render('index.jade')
})

app.post('/', upload.single('userFile'), function (req, res, next) {
    var filesize = req.file.size
    res.send(JSON.stringify({" size in bytes " : filesize}))
})

var port = process.env.PORT || 8080
app.listen(port, function () {
  console.log('Example app listening on port', port);
});