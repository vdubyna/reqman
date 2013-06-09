var app = app || {};

app.Package = Backbone.Collection.extend({
	model: app.Requirement,
	url: '/requirement'
});
