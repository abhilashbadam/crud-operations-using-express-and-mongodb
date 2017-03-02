var express=require('express');
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
var app=express();
app.listen("3000",function(err){
    if(err){
        console.log("port is not working");
    }else{
        console.log("port is working");
    }
});
/*app.get("/user/registration",function(req,res){
    res.send("registration done");
});
app.get("/home/submit",function(req,res){
    res.send("submited");
});*/
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var api=require("./api/user/api")();
app.use("/user/home/submit",api);
app.use(express.static(__dirname+"/public"));
mongoose.connect("mongodb://rama:rama123@ds163679.mlab.com:63679/ram",function(err){
    if(err){
        console.log("data base not connected");
    }else{
        console.log("data base connected");
    }
});