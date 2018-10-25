const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8080

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route)

app.listen(PORT, () => console.log('Server started at http://localhost:' + PORT))
