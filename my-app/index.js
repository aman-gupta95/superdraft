const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

require('./server/routes')(app);

app.use(express.static('./'));
app.listen(3500, () => console.log('App listening on port 3500'));
