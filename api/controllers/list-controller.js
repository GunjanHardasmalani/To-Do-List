/**
 * Controller for list endpoints.
 */

//import list service.
const listService = require('../services/list-service.js');
/**
 * Returns a list of lists in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (lists) => {
        response.status(200);
        response.json(lists);
    };
    listService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

// exports.getOngoing = function(req,resp){
//     console.log(req.params);
//     const resolve = (list) => {
//         resp.status(200);
//         resp.json(list);
//     };
//     listService.getOngoing(req.params)
//         .then(resolve)
//         .catch(renderErrorResponse(resp));
// }

/**
 * Creates a new list with the request JSON and
 * returns list JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newList = Object.assign({}, request.body);
    const resolve = (list) => {
        response.status(200);
        response.json(list);
    };
    listService.save(newList)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a list object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (list) => {
        response.status(200);
        response.json(list);
    };
    listService.get(request.params.listId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns a list object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    const list = Object.assign({}, request.body);
    const resolve = (list) => {
        response.status(200);
        response.json(list);
    };
    list._id = request.params.listId;
    listService.update(list)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes a list object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (list) => {
        response.status(200);
        response.json({
            message: 'list Successfully deleted'
        });
    };
    listService.delete(request.params.listId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};


/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};

