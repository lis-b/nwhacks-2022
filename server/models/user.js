var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        username: {type:String, required: true, index:{unique:true}},
        email: {type:String, required: true, index:{unique:true}},
        password: {type:String, required:true},
        first_name: {type:String},
        last_name: {type:String},
        recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}]
    }
);

UserSchema.virtual('full_name').get(()=>{
    return this.first_name + ' ' + this.last_name;
});

module.exports = mongoose.model('User', UserSchema);