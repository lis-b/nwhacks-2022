var express = require('express');
var router = express.Router();
const Database = require('../database.js');
const Recipe = require('../models/recipe.js');

function deepcopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

router.get('/search_view', function(req,res,next){
    //TODO
    //REMEMBER TO GET RID OF _id AND GIVE id with a string
    res.send("Hello World!");
});

router.get('/recipe/:recipeID', function(req,res,next){
    let recipeID = req.params.recipeID;
    Database.getById(Recipe, recipeID)
        .then((result) => {
            if(result === null) {
                res.status(404);
            }
            else {
                let retobj = deepcopy(result);
                let id = retobj._id.toString();
                delete retobj._id;
                retobj.id = id;
                console.log(retobj);
                res.status(200).json(retobj);
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = router;
