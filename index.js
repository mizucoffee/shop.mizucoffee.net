const express = require('express')
const app = express()
const server = app.listen(process.env.PORT || 3000, () => console.log("Node.js is listening to PORT:" + server.address().port))

app.disable('x-powered-by')
app.use(express.static('./dist'))
