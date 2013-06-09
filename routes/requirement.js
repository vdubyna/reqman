
exports.list = function(request, response){

    return RequirementModel.find( function( err, requirements ) {
        if( !err ) {
            return response.send( requirements );
        } else {
            return console.log( err );
        }
    });
};

exports.find = function(request, response){
    return RequirementModel.findById( request.params.id, function( err, requirement ) {
        if( !err ) {
            return response.send( requirement );
        } else {
            return console.log( err );
        }
    });
};

exports.add = function(request, response){
    var requirement = new RequirementModel({
        name: request.body.name,
        description: request.body.description
    });
    requirement.save( function( err ) {
        if( !err ) {
            return console.log( 'created' );
        } else {
            return console.log( err );
        }
    });

    return response.send( requirement );
};

exports.update = function(request, response){
    console.log( 'Updating requirement ' + request.body.name );
    return RequirementModel.findById( request.params.id, function( err, requirement ) {
        requirement.title = request.body.name;
        requirement.author = request.body.description;

        return requirement.save( function( err ) {
            if( !err ) {
                console.log( 'requirement updated' );
            } else {
                console.log( err );
            }
            return response.send( requirement );
        });
    });
};

exports.delete = function(request, response){
    console.log( 'Deleting requirement with id: ' + request.params.id );
    return RequirementModel.findById( request.params.id, function( err, requirement ) {
        return requirement.remove( function( err ) {
            if( !err ) {
                console.log( 'Requirement removed' );
                return response.send( '' );
            } else {
                console.log( err );
            }
        });
    });
};