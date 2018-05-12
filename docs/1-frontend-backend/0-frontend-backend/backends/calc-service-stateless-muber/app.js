const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

// cross origin resource sharing
// to accept requests that weren't issued by an app served on this port
//  a must for APIs
app.use(cors());

routes(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
