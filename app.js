var express = require('express');
var app = express();

var handlebars = require('express-handlebars').create({ defaultLayout: null });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

var baseURL = 'http://localhost:' + app.get('port') + '/';
var reservedChannel = [8888, 7777, 3000];
var urlCollection = [
  {
  original_url: 'https://www.google.com',
  short_url: baseURL + reservedChannel[1],
},
{
  original_url: 'https://www.freecodecamp.com/',
  short_url: baseURL + reservedChannel[2],
},
{
  original_url: 'https://github.com/AsimoLoveGym',
  short_url: baseURL + reservedChannel[3],
},
];

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/new/*', function (req, res) {
  // TODO: Input path validation goes here
  var queryObject = req.path;
  var queryString = queryObject.slice(5);

  // console.log(queryString);
  // console.log(shortnerNumGenerator());
  var freshChannel = shortnerNumGenerator();

  var shortURL = baseURL + freshChannel;
  var outPutJson = {
    original_url: queryString,
    short_url: shortURL,
  };
  urlCollection.push(outPutJson);
  reservedChannel.push(freshChannel);
  console.log(urlCollection);
  console.log(reservedChannel);
  res.json(outPutJson);
});

app.get('/*', function (req, res) {
  var queryChanel = Number(req.path.slice(1));
  var redirectURL = urlCollection[reservedChannel.indexOf(queryChanel)].original_url;

  // TODO: Input shortner validation goes here
  res.redirect(redirectURL);
});

// custom 404 page
app.use(function (req, res, next) {
  res.status(404);
  res.render('404');
});

// custom 500 page
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function () {
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-c to terminate.');
});

function shortnerNumGenerator() {
  var randomChannel = 0;
  do {
    randomChannel = Math.floor(Math.random() * 10000);
  } while (reservedChannel.indexOf(randomChannel) > -1);

  return (randomChannel);
}
