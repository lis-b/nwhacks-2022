#!/usr/bin/env node

const User = require("./models/user.js");
const Recipe = require("./models/recipe.js");
const Database = require("./database.js");

// Test users and recipes
const Constants = require("./constants.js");
const User1 = new User(Constants.User1.user);
const User2 = new User(Constants.User2.user);
const LobsterBisque = new Recipe(Constants.LobsterBisque.recipe);

// Setup the database
require('dotenv').config();
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.qw0sk.mongodb.net/recipe_db?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

Promise.resolve(Database.insert([User1, User2])).then(() => {
    Database.get(User, {username : "pat123"}).then((result) => {
        console.log(result);
        Database.get(User, {username : "bonjour_croissant"}).then((result) => {
            console.log(result);
            Database.deleteOne(User, {username : "pat123"}).then((result) => {
                console.log(result);
                Promise.resolve(Database.insert([LobsterBisque])).then(() => {
                    Database.get(Recipe, {name : "LobsterBisque"}).then((result) => {
                        console.log(result);
                        Database.updateOne(Recipe, {name:"Lobster Bisque"}, {difficulty : 2}).then((result) => {
                            console.log(result);
                        })
                    })
                })
            })
        })
    })
});

// // Add users to database
// Database.insert([User1, User2]);

// Database.get(User, {username : "pat123"}).then((result) => {
//     console.log(result);
// });

// Database.get(User, {username : "bonjour_croissant"}).then((result) => {
//     console.log(result);
// });

// Database.insert([LobsterBisque]);

// Database.updateOne(Recipe, {name:"Lobster Bisque"}, {difficulty : 2});
// async function test_delete(){
//     console.log(await Database.deleteOne(User, {username : "pat123"}));
// }

// test_delete();

// Database.get(User, {username : "pat123"}).then((result) => {
//     console.log(result);
// });
