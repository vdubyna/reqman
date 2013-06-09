var app = app || {};

app.Requirement = Backbone.Model.extend({
	defaults: {
		name: 'Reqman',
		description: 'Reqman Desc'
    },

	idAttribute: '_id'
});
