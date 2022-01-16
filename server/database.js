class Database {
    /**
     * Adds objects to a MongoDB database using the Mongoose API.
     * 
     * @param
     *  An array of objects. Objects are added and any arguments following the array are ignored.
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
    static insert(arr) {
        for(let elem of arr) {
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
        return collection.find(query);
    }

    /**
     * Queries a MongoDB database using the Mongoose API.
     * 
     * @param {Mongoose.Schema} collection
     *  The name of the collection to be queried.
     * 
     * @param {string} id
     *  The id of the object that is queried for in the database.
     *  
     * @returns {Promise}
     *  Returns a Promise that resolves to the results of the query upon success.
     *  If an error occurs, then the Promise rejects.
     * 
     */
    static getById(collection, id) {
        return collection.findById(id);
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
     * @returns {Promise}
     *  Returns a promise that resolves to the number of objects that were removed 
     *  from the database.
     */
    static deleteOne(collection, query) {
        return collection.deleteOne(query);
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
     * @returns {Promise}
     *  Returns a promise that resolves to the number of objects that were removed 
     *  from the database.
     */
    static deleteMany(collection, query) {
        return collection.deleteMany(query);
    }

    /**
     * 
     * @param {Mongoose.Schema} collection
     *  The name of the collection that is to be queried.
     * 
     * @param {object} query
     *  The object that contains the query information. It is assumed that all
     *  fields that are used to query the collection follow its corresponding
     *  schema.
     * 
     * @param {object} updatedFields
     *  The object that contains the updated data. It is assumed that all
     *  fields that are used to query the collection follow its corresponding
     *  schema.
     * 
     * @returns {Promise}
     *  Returns a promise that resolves to an object that gives statistics on what
     *  happened during the update:
     *  
     *   res.matchedCount   Number of documents matched
     *   res.modifiedCount  Number of documents modified
     *   res.acknowledged   Boolean indicating everything went smoothly.
     *   res.upsertedId     null or an id containing a document that had to be upserted.
     *   res.upsertedCount  Number indicating how many documents had to be upserted. Will either be 0 or 1.
     */
    static updateOne(collection, query, updatedFields) {
        return collection.updateOne(query, updatedFields);
    }
}

module.exports = Database;
