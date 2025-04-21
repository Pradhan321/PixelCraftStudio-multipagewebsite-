const app = require('express')();
const compression = require('compression');

app.use(compression(
  level=9,
));
app.use(require('express').static('dist'));

app.listen(3000, () => {
  console.log('Running on http://localhost:3000');
});
// npm init -y
// npm install express compression
// node server.js