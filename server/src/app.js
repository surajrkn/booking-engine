const express = require('express')
const router = require('./router')

const app = express();

app.use("/login", router)

app.listen(8001, () => {
    console.log("server started")
})