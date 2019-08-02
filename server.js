let express = require('express');
let cors = require('cors');
let app = express();

app.use(cors())
let port = process.env.PORT | 8001;
let routes = require('./api/routes/apiRoutes');
routes(app);

app.set('views', './views');
app.set('script', './views/script.js');
app.set('view engine', 'jade');


app.listen(port, () => {
    console.log(`Enjoy =)`);
    console.log(`http://localhost:${port}!`);
});
