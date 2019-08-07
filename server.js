let express = require('express');
let cors = require('cors');
let app = express();
let path = require('path');
let favicon = require('serve-favicon');

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

let port = process.env.PORT | 8001;
let routes = require('./api/routes/apiRoutes');
routes(app);

// view engine setup
app.set('views', './views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.listen(port, () => {
    console.log(`
	Everything looks OK.
	Do not close that window
	Enjoy =)`);

    console.log(`
	|---------------------------|
	|			    |
	|  App available on:        |
	|   http://localhost:${port}   |
	|			    |
	|---------------------------|
		(\\__/) || 
		( •_•) || 
		/   |  ||`)

});

