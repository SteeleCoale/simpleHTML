const express = require('express');
const app = express();
const path = require('path')

const port = 3000;

app.get('/', (req, res) => {
  res.set({ "content-type": "text/html; charset=UTF-8" })
  return res.status(200).sendFile(path.join(__dirname, '/simplehtml.html'))
})

app.listen(port, () => {
  console.log(`Listening on port: ${port} `)
})