import * as express from 'express'
import * as fileUpload from 'express-fileupload'
import * as createError from 'http-errors'
import * as path from 'path'
import * as logger from 'morgan'

// Enables Cross Origin Resource Sharing for our Project
const cors = require("cors");

import paymentsRouter from './routes/payments'

const app = express()

app.use(cors());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*")
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type')
  next()
})

app.use(logger('dev'))
app.use(fileUpload({
  limit: { fileSize: Infinity },
}));
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use('/receipts', express.static(path.join(__dirname, 'receipts')))

app.use('/payments', paymentsRouter)

app.use(function(req, res, next) {
  next(createError(404))
})

app.use(function(err, req, res, next) {
  const message = err.message
  const error = req.app.get('env') === 'development' ? err : {}
  const status = err.status || 500

  res.status(status || 500)
  res.send({
    status,
    message,
    error
  })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT)
console.log('API running at http://localhost:5000')
