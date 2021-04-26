const express = require('express')
require('dotenv').config()
const helmet = require("helmet");
const cors = require('cors')

const construction = require("./Routes/construction")

const app = express();

app.use(helmet());
app.use(cors());

const port = process.env.TEST_VAR || 8080;
// const port = 8080;

app.get('/', (req, res, next) => {
    res.json({
        welcome: "Welcome"
    });
})

app.use("/construction", construction)

app.use((req, res, next) => {
    res.status(404);
    res.send("Error 404")
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})