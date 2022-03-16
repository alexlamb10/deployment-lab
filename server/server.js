const express = require("express");
const cors = require("cors");
const path = require('path')

const app = express();
app.use(cors())
app.use(express.json())


//Middlewaree to connect deploy
app.use(express.static(path.join(__dirname, "../public")))

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Working on port ${port}`)
})