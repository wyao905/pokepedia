const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('sdfd')
})

app.listen(process.env.PORT || 3000)