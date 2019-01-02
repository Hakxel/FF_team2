const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static(__dirname + 'client/build'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/index.js`)
})

app.get('/localsearch', async (req, res) => {
  let {data} = await axios.get("http://coinmap.org/api/v1/venues/");
  res.send(data.venues)
})

app.get('/onlinesearch/:productName', async (req, res) => {
  let product = req.params.productName
  let { data } = await axios.get("http://spendabit.co/api/v0/go?q="+product);
  res.send(data.products)
})

let PORT = process.env.PORT || 5000

app.listen(PORT, () => { console.log("App is running on port " + PORT)})