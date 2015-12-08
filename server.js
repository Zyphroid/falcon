// modules =================================================
//call the packages we need
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');



// configuration ===========================================

// config files
var db = require('./config/db.js');

var router = express.Router();

var port = process.env.PORT || 3000; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);

console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app



//just for adding the products from json url to database; might as well be in a different file!
var Product     = require('./app/models/Product');


var http = require('https');
var options = {
    host: 'jsonblob.com',
    path: '/api/jsonBlob/55683150e4b03d338bd86998'
    };
var request = http.request(options, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        data += chunk;

    });
    res.on('end', function () {
        var productsJson = JSON.parse(data);

        for(i in productsJson){


            var product = new Product();      // create a new instance of the product model
            product.status = productsJson[i].status;  // set the product name (comes from the request)
            product.content.media.url = productsJson[i].content.media.url;
            product.scheduled = productsJson[i].scheduled;

            //Remove the products before inserting them again
            Product.remove({status: productsJson[i].status}, function (err){

            });
            product.save(function(err) {
                if (err)
                    return res.send(err);
            });
        }
    });
});
request.on('error', function (e) {
    console.log(e.message);
});
request.end();