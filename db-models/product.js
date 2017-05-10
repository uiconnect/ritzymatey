var mongoose = require('mongoose'),
	util = require('../util'),
    Schema = mongoose.Schema;

var SchemaInst = new Schema({
	stockAvailable      : util.dbValidation.str,
	stockOrdered        : util.dbValidation.str,
	totalStock          : util.dbValidation.str,
	unclearedStockValue : util.dbValidation.str,
	prodId              : {
														type     : String,
														required : true,
														index    : { unique: true } ,
														min      : 1,
														max      : 30
												},
	name                : util.dbValidation.str,
	description         : util.dbValidation.str,
	details             : util.dbValidation.str,
	category            : util.dbValidation.str,
	clothingType        : util.dbValidation.str,
	colorAvailability        : [String],
	sizeAvailability         : [String],
	dateOfAbilityFrom   : util.dbValidation.str,
	dateOfAbilityTo     : util.dbValidation.str,
	img                 : [Schema.Types.Mixed],
	keyWords            : [String],
	pricing             : [Schema.Types.Mixed]
									//[{CurrencyType,Cost,MRP,OnSale,SalePrice,SaleStartDate,SaleEndDate},...]
});

module.exports = mongoose.model('product', SchemaInst);
