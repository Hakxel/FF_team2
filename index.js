const express = require('express');
const axios = require('axios');
const path = require('path')

const app = express();

app.use(express.static( path.join(__dirname, 'client/build')));

// app.get('/*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client/build/public', 'index.html'))
// })

app.get('/localsearch', async (req, res) => {
  let { data } = await axios.get("http://coinmap.org/api/v1/venues/");
  res.send(data.venues)
})

app.get('/onlinesearch/:productName', async (req, res) => {
  let product = req.params.productName
  let { data } = await axios.get("http://spendabit.co/api/v0/go?q=" + product);
  res.send(data.products)
})

let PORT = process.env.PORT || 5000

app.listen(PORT, () => { console.log("App is running on port " + PORT)})