var mongoose = require('mongoose'),
	util = require('../util'),
    Schema = mongoose.Schema;

var SchemaInst = new Schema({
	categories : [Schema.Types.Mixed],
	//each array element contain below object structure
	/*{name                : util.dbValidation.str,
	description         : util.dbValidation.str,
	img                 : Schema.Types.Mixed,}*/
});

module.exports = mongoose.model('category', SchemaInst);
