const express = require('express')
const app = express()
const port = process.env.PORT || 6001

const bodyParser = require('body-parser')
app.use(bodyParser.json())
const morgan = require('morgan')
app.use(bodyParser.json())

app.disable('x-powered-by')

app.get('/:food', (req, res) => {
  console.log(req.params.food)
  if (req.params.food === 'chocolate') {
    res.send('Yes!')
  } else if (req.params.food === 'asparagus') {
    res.send('meh')
  } else {
    res.send("(ツ)_/¯")
  }
})

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error : err })
})

app.use((req, res, next) => {
  res.status(404).json({ error : { message : 'Not found' } })
})

const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)
