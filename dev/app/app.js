const express = require('express')
const app = express()
const port = 3000

app.set('port', port)

app.get('/', (req, res) => {
  res.send(`Page For Testing Docker`)
})

app.get('/:name', (req, res) => {
  res.send(`Hola ${req.params.name}!`)
})

app.listen(app.get('port'), (err) => {
  console.log(`Server running on port ${app.get('port')}`)
})