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

var ingredients_list = ["butter","apple"];

var queryObj = {"ingredients.ingredient": {$in: ingredients_list}};

var queryObj2_diff = null;
var queryObj2_time = null;
var queryObj2_ingredients = [];
// var queryObj2 = {$and : [
//     excludeIfNull('difficulty',queryObj2_diff),
//     excludeIfNull('time',queryObj2_time),
//     excludeIfEmpty('\"ingredients.ingredient\"','$in',queryObj2_ingredients)
// ].filter(field=>field !== null)};
const projectObj = {_id:1,name:1,time:1,difficulty:1,description:1,rating:1};
console.log(queryObj2);
///// DEBUG THIS
function excludeIfNull(key,value){
    return value === null ? null : {[key] : value};
}

function excludeIfEmpty(key,operator,values){
    return values.length === 0 ? null : {[key] : {[operator] : values}};
}

function deepcopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function constructQuery(difficulty,time,ingredients) {
    var queryObj = { $and : [
        excludeIfNull('difficulty', difficulty),
        excludeIfNull('time', time),
        excludeIfEmpty('\"ingredients.ingredient\"','$in', ingredients)
    ].filter(field => field !== null)}; //filter out empty/null
    
    //if its empty replace it with a query all - $and doesn't support empty list
    return queryObj.$and.length === 0 ? {} : queryObj; 
}

var queryObj2 = constructQuery(queryObj2_diff,queryObj2_time,queryObj2_ingredients);

// Promise.resolve(Database.insert([User1, User2])).then(() => {
    // Promise.resolve(Database.get(User, {username : "pat123"})).then((result) => {
    //     console.log(result);
    //     Database.get(User, {username : "bonjour_croissant"}).then((result) => {
    //         console.log(result);
    //         Database.deleteOne(User, {username : "pat123"}).then((result) => {
    //             console.log(result);
    //             Promise.resolve(Database.insert([LobsterBisque])).then(() => {
    //                 Database.get(Recipe, queryObj).then((result) => {
    //                     console.log(result);
    //                     Database.updateOne(Recipe, {name:"Lobster Bisque"}, {difficulty : 2}).then((result) => {
    //                         console.log(result);
    //                     })
    //                 })
    //             })
    //         })
    //     })
    // });
// });

// Database.get(Recipe, {ingredients : { $in: ["4 tbsp. butter","apple"]}}).then((result => {
//     console.log(result);
// }));

// Database.get(Recipe, queryObj).then((result=>{
//     console.log(result);
// }));

Database.get(Recipe, queryObj2).select(projectObj)
    .then((result) => {
        if(result.length === 0) { //DEBUG?
            console.log(404);
        }
        else {
            let retarr = [];
            for (let obj of result){
                let retobj = deepcopy(obj);
                let id = retobj._id.toString();
                delete retobj._id;
                retobj.id = id;
                console.log(retobj);
                retarr.push(retobj);
            }
            console.log(retarr);
        }
    })
    .catch((err) => {
        console.log(err);
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
