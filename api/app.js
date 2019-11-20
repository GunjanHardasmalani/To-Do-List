 
 module.exports = function(app){
     //initialize models
     let listModel = require('./models/list'); 

     //initialize routes
     let listRoutes = require('./routes/list-route');
     listRoutes(app);
 };