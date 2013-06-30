var _ = require('underscore');
var ValidationError = require('../errors').ValidationError;

module.exports = {
	create: function(data, params, cb) {
		var self = this;
		this.validate(data, _.extend({ validates: 'create' }, params), function(errors) {
			if(errors) {
				return cb(new ValidationError(errors));
			}
			return self._super(data, params, cb);
		});
	},

	update: function(id, data, params, cb) {
		var self = this;
		this.validate(data, _.extend({ validates: 'update' }, params), function(errors) {
			if(errors) {
				return cb(new ValidationError(errors));
			}
			return self._super(id, data, params, cb);
		});
	}
};