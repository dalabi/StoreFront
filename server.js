var express = require ('express');
var app = express();
var exphbs = require ('express3-handlebars');
app.engine('handlebars', 
	exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
	res.render('index', {
		name: 'World!'
	});
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.use('/public', express.static('public'));

var port = process.env.port || 5000;

app.listen(port);