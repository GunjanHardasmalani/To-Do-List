/**
 * Service for List operations.
 */


const mongoose = require('mongoose'),
    List = mongoose.model('lists');


/**
 * Returns an array of list object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = List.find(params).exec();
    return promise;
};

/**
 * Saves and returns the new list object.
 *
 * @param {Object} list {list object}
 */
exports.save = function (list) {
    const newList = new List(list);
    const promise = newList.save();
    return promise;
};


/**
 * Returns the list object matching the id.
 *
 * @param {string} listId {Id of the list object}
 */
exports.get = function (listId) {
    const promise = List.findById(listId).exec();
    return promise;
};

// exports.getOngoing = function (params) {
//     console.log("ONGOING");
//     const promise = List.findOne(params).exec();
//     return promise;
// };


/**
 * Updates and returns the list object.
 *
 * @param {Object} list {list object}
 */
exports.update = function (list) {
    list.modified_date = new Date();
    const promise = List.findOneAndUpdate({_id: list._id}, list).exec();
    return promise;
};

/**
 * Deletes the list object matching the id.
 *
 * @param {string} listId {Id of the list object}
 */
exports.delete = function (listId) {
    const promise = List.remove({_id: listId});
    return promise;
};


