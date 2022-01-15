const mongoose = require("mongoose");

class Database {
    /**
     * Adds objects to a MongoDB database using the Mongoose API.
     * 
     * @param
     *  There are no parameters in this function, but javascript allows for
     *  variadic arguments. In other words, as many objects can be passed to
     *  this function as one may like.
     * 
     *  Each object is assumed to be defined by a valid mongoose schema, and that
     *  all optional fields are filled in with a default value if not already set
     *  in each object.
     * 
     *  The app must be connected to the database for this function to be successful.
     * 
     * @effects
     *  Adds all objects to the database.
     * 
     */
    static insert() {
        for(let elem of arguments) {
            elem.save();
        }
    }

    /**
     * Queries a MongoDB database using the Mongoose API.
     * 
     * @param {Mongoose.Schema} collection
     *  The name of the collection to be queried.
     * 
     * @param {object} query
     *  The object that contains the query information. It is assumed that all
     *  fields that are used to query the collection follow its corresponding
     *  schema.
     *  
     * @returns {Promise}
     *  Returns a Promise that resolves to the results of the query upon success.
     *  If an error occurs, then the Promise rejects.
     * 
     */
    static get(collection, query) {
        return new Promise((resolve, reject) => {
            collection.find(query, (err, results) => {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    }

    /**
     * Deletes one object from the database that matches the query.
     * 
     * @param {Mongoose.Schema} collection
     *  The name of the collection that is to be queried.
     * 
     * @param {object} query
     *  The object that contains the query information. It is assumed that all
     *  fields that are used to query the collection follow its corresponding
     *  schema.
     * 
     * @returns {Number}
     *  Returns the number of objects that were removed from the database.
     */
    static deleteOne(collection, query) {
        let delcount = await collection.deleteOne(query);
        return delcount;
    }

    /**
     * Deletes many objects from the database that matches the query.
     * 
     * @param {Mongoose.Schema} collection
     *  The name of the collection that is to be queried.
     * 
     * @param {object} query
     *  The object that contains the query information. It is assumed that all
     *  fields that are used to query the collection follow its corresponding
     *  schema.
     * 
     * @returns {Number}
     *  Returns the number of objects that were removed from the database.
     */
    static deleteMany(collection, query) {
        let delcount = await collection.deleteMany(query);
        return delcount;
    }
}

module.exports = Database;
