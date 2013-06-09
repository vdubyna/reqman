
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose'); //MongoDB integration

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Init database
//Connect to database
mongoose.connect( 'mongodb://localhost/requirements_database' );

var Requirement = new mongoose.Schema({
    name: String,
    description: String
});

//Models
RequirementModel = mongoose.model( 'Requirement', Requirement );

// Init routers
var requirement = require('./routes/requirement.js');

app.get('/requirement', requirement.list);
app.get('/requirement/:id', requirement.find);
app.post('/requirement', requirement.add);
app.put('/requirement/:id', requirement.update);
app.delete('/requirement/:id', requirement.delete);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
