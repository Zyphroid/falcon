// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    status : {type: String, default: ''},
    name : {type : String, default: ''},
    scheduled: {type: String, default: ''},
    content: {
        media: {
            url: {type: String, default: ''}
        }
    }
});


module.exports = mongoose.model('Product', ProductSchema);



// define our product model
// module.exports allows us to pass this to other files when it is called
//module.exports = mongoose.model('Product', {
//	name : {type : String, default: ''},
//    scheduled: {type: String, default: ''},
//    content: {
//        media: {
//            url: {type: String, default: ''}
//        }
//    }
//});
