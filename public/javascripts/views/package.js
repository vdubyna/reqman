var app = app || {};

app.PackageView = Backbone.View.extend({
	el: $( '#requirements' ),

	initialize: function() {
		this.collection = new app.Package();
        this.collection.fetch();
		this.render();

		this.listenTo( this.collection, 'add', this.renderRequirement );
        this.listenTo( this.collection, 'reset', this.render );
	},

	events: {
		'click #add': 'addRequirement'
	},

    addRequirement: function( e ) {
		e.preventDefault();

		var formData = {};

		$( '#addRequirement div' ).children( 'input' ).each( function( i, el ) {
			if( $( el ).val() != "" )
			{
                 formData[ el.id ] = $( el ).val();
			}
		});

		this.collection.create( formData );
	},

	render: function() {
        this.collection.each(function( item ) {
            this.renderRequirement( item );
		}, this );
	},

	renderRequirement: function( item ) {
		var requirementView = new app.requirementView({
			model: item
		});
		this.$el.append( requirementView.render().el );
	}
});
