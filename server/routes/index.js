var express = require('express');
var router = express.Router();
const Database = require('../database.js');
const Recipe = require('../models/recipe.js');

router.get('api/search_view', function(req,res,next){
    //TODO
    //REMEMBER TO GET RID OF _id AND GIVE id with a string
});

router.get('api/recipe/:recipeID', function(req,res,next){
    let recipeID = req.params.recipeID;
    Database.getById(Recipe, recipeID)
        .then((result) => {
            console.log(result);
            res.send(result);
        })
        .catch((err) => {
            //res.status(500).json(err);
        });
});

module.exports = router;
