var mongoose=require("mongoose");
var userSchema=mongoose.Schema;
var blogSchema = new userSchema({
  dbfirstName:  String,
  dblastName: String,
  dbid:Number,
 dbemail:String
});
module.exports=mongoose.model("userSchemaClass",blogSchema);
 