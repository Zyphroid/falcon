angular.module('falconApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'CreateProductCtrl', 'NerdService', 'GeekCtrl', 'GeekService']);

var mongoose = require('mongoose');
require('./models/Product');


mongoose.connect('mongodb://localhost/falcon');