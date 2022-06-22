const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 80

const app = express()

// To allow static content reload
app.use(express.static('views'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname) + '/views/index.html')
})

app.listen(PORT, () => {
    console.log(`App listening on Port ${PORT}`);
})