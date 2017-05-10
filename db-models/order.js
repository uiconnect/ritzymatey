var mongoose = require('mongoose'),
	util = require('../util'),
    Schema = mongoose.Schema;

var Referal = new Schema({
	txId          : util.dbValidation.str,
	custId        : util.dbValidation.str,
	ts            : util.dbValidation.str,
	expDlry       : util.dbValidation.str, // Not sure whether to maintain @ order level or item level
	actDlry       : util.dbValidation.str, // Not sure whether to maintain @ order level or item level
	amnt          : util.dbValidation.str,
	status        : util.dbValidation.str,
	refundStatus  : util.dbValidation.str,
	billingAdd    : [Schema.Types.Mixed],
	DlryAdd       : [Schema.Types.Mixed],
	items         : [Schema.Types.Mixed]
									//[{prodId,count,status,expDlry,actDlry},...]
});

module.exports = mongoose.model('referral', Referal);
