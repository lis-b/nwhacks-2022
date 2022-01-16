var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const Constants = require('../constants.js').Constants;

var RecipeSchema = new Schema(
    {
        name: {type:String, required: true},
        time: {type:Number, required: true},
        difficulty: {type:Number, required: true},
        description: String,
        ingredients: [{
            ingredient: String,
            quantity: String,
        }],
        steps: {type:[String], required:true},
        rating: [Number], // [upvotes,downvotes]
        country: String,
        image: String, //return a filepath relative to react app.
        user: {type: Schema.Types.ObjectId, ref: 'User'}
    }
);

//difficulty string virtual type
RecipeSchema.virtual('difficultyString').get(() => {
    return Constants.difficulties[this.difficulty]; 
});

//time string virtual type
RecipeSchema.virtual('timeString').get(() => {
    return Constants.times[this.time];
});

//rating sum virtual type
RecipeSchema.virtual('ratingSum').get(() => {
    return rating[0] + rating[1];
})

module.exports = mongoose.model('Recipe', RecipeSchema);