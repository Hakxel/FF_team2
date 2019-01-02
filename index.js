const express = require('express');
// const axios = require('axios');

const app = express();

app.use(express.static(__dirname + 'client/build'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/index.js`)
})

let PORT = process.env.PORT || 5000

app.listen(PORT, () => { console.log("App is running on port " + PORT)})