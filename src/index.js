const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
var path = require('path');

// template engine
app.engine('hbs', handlebars.engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',  path.join(__dirname, 'resources/views'));

// morgan
app.use(morgan('combined'))

// static img
app.use(express.static(path.join(__dirname, 'public')))

//

app.get('/', function (req, res) {
  res.render('home')
})

app.listen(port, () => console.log(`http://localhost:${port}`))