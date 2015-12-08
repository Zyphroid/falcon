var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var Product     = require('../app/models/Product');
module.exports = function(app) {
    // server routes ===========================================================
    // handle things like api calls
    // authentication routes



    app.post('/api/v1/product', function(req, res) {
        //Create object
        var product = new Product();      // create a new instance of the product model
        product.status = req.body.status;  // set the product name (comes from the request)
        product.content.media.url = req.body.image;
        product.scheduled = req.body.scheduled;
        product.save(function(err) {
            if (err)
                return res.send(err);

            //Update the page after create without refreshing
            Product.find({}, function(err, products) {
                if (err) throw err;

                // object of all the products
                return res.json(products);
            });
        });
    });
    app.get('/api/v1/products', function(req, res) {
        Product.find({}, function(err, products) {
            if (err) throw err;

            // object of all the users
            return res.json(products);
        });
    });

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });

    // delete the product with this id
    app.delete('/api/v1/product/:_id', function(req, res) {
        Product.remove({
            _id: req.params._id
        }, function(err, product) {
            if (err)
                res.send(err);


            //Update the page after delete without refreshing
            Product.find({}, function(err, products) {
                if (err) throw err;

                // object of all the users
                return res.json(products);
            });
        });
    });

    //Edit the product with this id
    app.put('/api/v1/product', function(req, res) {

        // use our product model to find the product we want
        Product.findById(req.body._id, function (err, product) {

            if (err)
                res.send(err);

            product.status = req.body.status;
            product.content.media.url = req.body.content.media.url;
            product.scheduled = req.body.scheduled;

            // save the bear
            product.save(function (err) {
                if (err)
                    res.send(err);

                //Update the page after delete without refreshing
                Product.find({}, function(err, products) {
                    if (err) throw err;

                    // object of all the users
                    return res.json(products);
                });
            });

        });
    });


};