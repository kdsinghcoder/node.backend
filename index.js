var express = require("express");
var index = express();


index.get("/",function(req,res){
    res.send("hi there , welcome to my assignment");
});
index.get("/speak/:animal",function(req,res){
    var animal= req.params.animal;
    var sound="";
    if(animal==="pig"){
        sound="oink";
    }else if (animal==="cow"){
        sound="moo";
    }
    res.send("the "+animal+"says "+sound);
});
index.listen(3001, 'localhost', function() {
    console.log("server is on");
  });