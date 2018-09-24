var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/MongooseCatsDB');

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the db
var george = new Cat({
    name: "George",
    age: 11,
    temperament: "Happy"
});

george.save(function(err, cat){
    if(err){
        console.log("Something went wrong")
    }else{
        console.log("Cat saved.")
        console.log(cat)
    }
})

//retrieve all the cats from the db

