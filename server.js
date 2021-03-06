let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser'),
    cors = require('cors');


// mongoose instance connection url connection
mongoose.connect('mongodb://localhost:27017/listDB',{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;


//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var originsWhitelist = [
  'http://localhost:4200'
];
var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}
//here is the magic
app.use(cors(corsOptions));
//Initialize app
let initApp = require('./api/app');
initApp(app);

app.listen(port);
console.log('TO-DO List RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });


