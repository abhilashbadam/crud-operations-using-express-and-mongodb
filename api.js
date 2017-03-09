var express=require("express");
var user=require("./userSchema");
module.exports=function(){
    var router=express.Router();
router.post("/add",function(request,response){
        //response.send("succesfully done");
        var firstName=request.body.firstName;
        //response.send(firstName);
        var lastName=request.body.lastName;
        var email=request.body.email;
  var userAdd = new user({
  dbfirstName:firstName,
  dblastName:lastName,
  dbemail:email
});
      userAdd.save(function(err){
        if(err){
        response.send(err);
        }else{
        response.send("done");
            }  
      });  //response.json({"firstName":firstName,"lastName":lastName,"email":email});
    });
    router.get("/abhilash",function(req,res){
        var name=req.query.name;
       user.find({},function(err,data){
           if(err){
               res.send(err);
           }else{
               res.send(data);
           }
            });
    });
    router.delete("/deleteuser",function(req,res){
      var id=req.query.id;
        user.findByIdAndRemove(id,function(err,data){
           if(err){
               res.send(err);
           }else{
               var result={
                   message:"succesfully deleted",
                   status:200,
                   userID:data._id
               }
               res.send(result);
           }
            });
        });
        router.put("updateuser",function(request,response){
        //response.send("succesfully done");
        var firstName=request.body.firstName;
        //response.send(firstName);
        var lastName=request.body.lastName;
        var email=request.body.email;
  user.findById(id,function(err,data){
  data.dbfirstName=firstName,
  data.dblastName=lastName,
  data.dbemail=email
  data.save(function(err){
       if(err){
           response.send(err);
       }else{
           response.send("succesfully updated");
       }
  });
});
    });
    return router;
};
