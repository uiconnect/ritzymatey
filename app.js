var mongoose = require('mongoose');
var Routes   = require('./api-controller');
var Htmls    = require('./htmls/controller');
var express  = require("express");
var path     = require('path');

//var csrf = require('csurf');
//var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');

//var connStr = 'mongodb://xcvsdf:lkjmnb@ds059516.mlab.com:59516/mani-portfolio';
var connStr = 'mongodb://test1:password1@ds059516.mlab.com:59516/mani-portfolio';

mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});
//var csrfProtection = csrf({ cookie: true });

var app = express();
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
app.use(bodyParser.text({limit: '50mb'}))
app.use(bodyParser.json({limit: '50mb'}))
// we need this because "cookie" is true in csrfProtection
//app.use(cookieParser());

app.set('superSecret', "!8765fahjds32"); // secret variable

var apiRouter = express.Router();
Routes.init(apiRouter,app);
app.use('/api', apiRouter); // apply the routes to our application with the prefix /api

var htmlRouter = express.Router();
Htmls.init(htmlRouter,app);
app.use(htmlRouter);

// Public static content
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 5000!');
});
