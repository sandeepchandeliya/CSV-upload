// IMPORTING PACKAGE
const mongoose = require("mongoose");


// MAKING CONNECTION 


const DB = 'mongodb+srv://clouduser:codingninjanodejs@cluster0.6ttptdh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(DB).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));


const db = mongoose.connection;

// CHECKING CONNECTION
//IF ERROR OCCURS
db.on("error", console.error.bind(console, "Error connecting to DB"));
// WHEN DB CONNECTS SUCCESSFULLY
db.once("open", function(){
    console.log("Successfully connected to DB");
});

module.exports = db;