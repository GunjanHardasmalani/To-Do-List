/**
 * list endpoint route definitions.
 */

module.exports = function (app) {
    const listController = require('../controllers/list-controller');
   
    // List Routes for search and create.
    app.route('/lists')
        .get(listController.list)
        .post(listController.post);
   
    // List Routes for get(view), update and delete.
    app.route('/lists/:listId')
        .get(listController.get)
        .put(listController.put)
        .delete(listController.delete);

 
        
};