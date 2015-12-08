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