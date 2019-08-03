let express = require('express');
let cors = require('cors');
let app = express();

app.use(cors())
let port = process.env.PORT | 8001;
let routes = require('./api/routes/apiRoutes');
routes(app);

app.set('views', './views');
app.set('view engine', 'jade');


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

