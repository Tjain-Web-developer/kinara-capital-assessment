const mongoose = require("mongoose")

exports.connectDB =( ) =>{
    mongoose.connect("mongodb+srv://kinara:kinara@kinaradb.bebclyl.mongodb.net/?retryWrites=true&w=majority")
    .then(function(){
        console.log("Database connected")
    })
    .catch(function(err){
        console.log(err);
    })
}