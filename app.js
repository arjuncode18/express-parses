
var express = require('express');
var app = express();
var PORT = 3000;
 
app.use(express.urlencoded({extended:true}));
   
app.post('/', function (req, res) {
    console.log(req.body);
    res.end();
});
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log(`http://localhost:${PORT}`)
    console.log("Server listening on PORT", PORT);
});