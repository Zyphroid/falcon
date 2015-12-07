var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var Product     = require('../app/models/Product');
module.exports = function(app) {
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

    app.delete('app/')

    app.post('/api/v1/product', function(req, res) {
            //Create object
            var product = new Product();      // create a new instance of the product model
            product.status = req.body.status;  // set the product name (comes from the request)
            product.content.media.url = req.body.image;
            product.scheduled = req.body.scheduled;
            product.save(function(err) {
                if (err)
                    return res.send(err);

                return res.json({ message: 'Product created!' });
            });
            res.json([{success:true}]);
        });
    app.get('/api/v1/products', function(req, res) {
        Product.find({}, function(err, products) {
            if (err) throw err;

            // object of all the users
            return res.json(products);
        });
        //return res.json([
        //    {
        //        "id": "8a1330c93e31b8af013e360d6a2106ea",
        //        "content": {
        //            "message": "Her er den perfekte gave",
        //            "id": "8a1330c93e31b8af013e360d6a2106ea",
        //            "network": "facebook", "postType": "photo",
        //            "media": {
        //                "fileName": "konfirmationsgave til hende.jpg",
        //                "url": "http://s3.amazonaws.com/mingler.falcon.scheduled_post_pictures/25c69cba-8881-4147-9fc9-d61a9c2de676"
        //            }
        //        },
        //        "tags": [
        //            "converstaion",
        //            "sales",
        //            "qwer"
        //        ],
        //        "status": "draft",
        //        "channels": [{"name": "Konfirmanden", "id": 433104606739910}],
        //        "scheduled": "2013-08-08T08:00:00.000Z",
        //        "geo": {
        //            "countries": [{"value": "Afghanistan", "key": "134"}],
        //            "languages": [{"value": "Afrikaans", "key": "31"}],
        //            "cities": [], "regions": []
        //        }
        //    },
        //
        //    {
        //        "id": "apsidf",
        //        "content": {
        //            "media": {
        //                "fileName": "http://www.quickmeme.com/img/1a/1a5db932bf1d0834fb118120de873d133e3c6c82d01f674cd7f8f18fa824b3dc.jpg",
        //                "fileUrl": "http://www.quickmeme.com/img/1a/1a5db932bf1d0834fb118120de873d133e3c6c82d01f674cd7f8f18fa824b3dc.jpg",
        //                "url": "http://www.quickmeme.com/img/1a/1a5db932bf1d0834fb118120de873d133e3c6c82d01f674cd7f8f18fa824b3dc.jpg"
        //            },
        //            "message": "asiodnf", "network": "asiodnf", "postType": "qipdfiaspdf"
        //        },
        //        "tags": [
        //            "aosjdnf",
        //            " oaisndf",
        //            " aousdf",
        //            " aosidf"
        //        ],
        //        "status": "aosdjnfasodjf", "scheduled": "tomorrow"
        //    },
        //
        //
        //    {
        //        "id": "testingtesting",
        //        "content": {
        //            "media": {
        //                "fileName": "nope",
        //                "fileUrl": "https://cdn.scratch.mit.edu/static/site/users/avatars/393/0818.png",
        //                "url": "https://s3.amazonaws.com/prod_sussleimg/Johnny-Derp-94d9bea1c0577a008f4237e006942e72.png"
        //            }, "message": "testtest", "network": "test", "postType": "bleh"
        //        },
        //        "tags": [
        //            "test",
        //            " test",
        //            " test2"
        //        ],
        //        "status": "draft"
        //    },
        //    {
        //        "id": "wine",
        //        "content": {
        //            "media": {
        //                "fileName": "wine",
        //                "url": "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Apps-wine-icon.png"
        //            }, "message": "wine", "network": "wine", "postType": "wine"
        //        },
        //        "tags": [
        //            "wine",
        //            "wine",
        //            "wine"
        //        ],
        //        "status": "wine"
        //    },
        //    {
        //        "id": "coffee",
        //        "content": {
        //            "media": {
        //                "fileName": "coffee",
        //                "url": "http://www.lighterliving.com/uploads/images/CoffeeGrounds.jpg"
        //            }, "message": "coffee", "network": "coffee", "postType": "coffee"
        //        },
        //        "tags": ["coffee"],
        //        "status": "coffee"
        //    },
        //    {
        //        "id": "snow",
        //        "content": {
        //            "media": {
        //                "fileName": "snow",
        //                "url": "http://pix.iemoji.com/images/emoji/apple/8.3/256/cloud-with-snow.png"
        //            }, "message": "snow", "network": "snow", "postType": "snow"
        //        },
        //        "tags": [
        //            "snow",
        //            "snow"
        //        ],
        //        "status": "snow"
        //    }
        //]);
    });

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});


};