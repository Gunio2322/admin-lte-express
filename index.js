const express = require('express')
const app = express()
// // add stackoverflow
// app.use('/admin', express.static('./node_modules/admin-lte'));

app.use('/admin', express.static('./node_modules/admin-lte-express/public'))
app.use('/', require('admin-lte-express'));

app.listen(3001, () => console.log('Example app listening on port 3001!'))