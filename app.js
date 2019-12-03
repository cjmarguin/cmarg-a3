var express = require('express');
var app = express ();

app.get('/', function (req,res){
    res.send('hello world');
});

app.listen(url, function(){
    console.log('example examples app listening on port 3000!');
});