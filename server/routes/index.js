var express = require('express');
var router = express.Router();
const Database = require('../database.js');
const Recipe = require('../models/recipe.js');

const projectObj = {_id:1,name:1,time:1,difficulty:1,description:1,rating:1};

function deepcopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function excludeIfNull(key,value){
    return value === null ? null : {[key] : value};
}

function excludeIfEmpty(key,operator,values){
    return values.length === 0 ? null : {[key] : {[operator] : values}};
}

/**
 *  WHAT WE EXPECT TO GET FROM FRONTEND
 *  {
 *      difficulty : Number (0 - 2),
 *      time : Number (0 - 2),
 *      ingredients : Array of strings
 *  }
 * 
 *  If no filter applied 
 *      difficulty : null
 *      number : null
 *      ingredients : []
 * 
 */
router.get('/search_view', function(req,res,next){
    var queryObj = {$and : [
        excludeIfNull('difficulty',req.body.difficulty),
        excludeIfNull('time',req.body.time),
        excludeIfEmpty('\"ingredients.ingredient\"','$in',req.body.ingredients)
    ].filter(field => field !== null)};
    Database.get(Recipe,queryObj).select(projectObj)
        .then((result) => {
            if(result.length === 0) { 
                res.status(404);
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
                res.status(200).json(retarr);
            }  
        })
        .catch((err) => {
            res.status(500).json(err);
        });
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
