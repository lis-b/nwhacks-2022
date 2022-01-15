var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RecipeSchema = new Schema(
    {
        name: {type:String, required: true},
        time: {type:Number, required: true},
        difficulty: {type:Number, required: true},
        ingredients: [String],
    }
);

RecipeSchema.virtual('difficulty_tostring').get(function() {
    switch(this.difficulty){
        case 0:
            return 'beginner'
        case 1:
            return 'intermediate'
        case 2:
            return 'advanced'
        default:
            return 'error?'; //TODO: figure out how to error this in js?
    }
});

RecipeSchema.virtual('time_tostring').get(function() {
    switch(this.time){
        case 0:
            return 'less 30 minutes';
        case 1:
            return 'under 1 hour';
        case 2:
            return '1 - 2 hours';
        case 3:
            return '2 - 3 hours';
        case 4:
            return 'more than 4 hours'
    }
});

module.exports = mongoose.model('Recipe', RecipeSchema);