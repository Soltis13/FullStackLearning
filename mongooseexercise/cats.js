var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/MongooseCatsDB');

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the db
// var george = new Cat({
//     name: "Bob",
//     age: 11,
//     temperament: "Happy"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong")
//     }else{
//         console.log("Cat saved.")
//         console.log(cat)
//     }
// })

//retrieve all the cats from the db
Cat.find({}, function(err, cats){
    if(err){
        console.log(err)
    }else{
        console.log(cats)
       
    }
})

//Create new 
Cat.create({
    name: "snow",
    age: 15,
    temperament: "Bland"
}), function(err, cat){
    if(err){
        console.log("Something went wrong")
    }else{
        console.log("Cat saved.")
        console.log(cat)
    }
}
