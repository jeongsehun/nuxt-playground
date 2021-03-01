const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.json({ message: 'here is API root' })
})

app.use('/hello', require('./hello'))

module.exports = app