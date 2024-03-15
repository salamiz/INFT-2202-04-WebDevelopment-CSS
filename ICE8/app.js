const express = require('express');
var exphbs = require('express-handlebars');

const PORT = 3000;
const app = express();

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');


// express app.use
app.use((req, res, next) => {
  console.log(`URL:, ${req.url}`);
  req.myName = 'Zul'
  next();
});


// Make index route
app.get('/home', (req, res) => {
    const titleText = 'Home Page with Handlebars';
    res.render('home', {title: titleText});
});

// Make about route
app.get('/about', (req, res) => {
  res.render('about', {aboutTitle: 'This is my about page !'});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});