var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const Constants = require('../constants.js');

var RecipeSchema = new Schema(
    {
        name: {type:String, required: true},
        time: {type:Number, required: true},
        difficulty: {type:Number, required: true},
        ingredients: [String],
    }
);

//difficulty string virtual type
RecipeSchema.virtual('difficultyString').get(function() {
    return Constants.difficulties[this.difficulty]; 
});

//time string virtual type
RecipeSchema.virtual('timeString').get(function() {
    return Constants.times[this.time];
});

module.exports = mongoose.model('Recipe', RecipeSchema);