const express = require('express')
require('dotenv').config()
const helmet = require("helmet");
const cors = require('cors')

const constructionJson = require("./Routes/constructionJson")
const constructionView = require("./Routes/constructionView")

const app = express();

app.use(helmet());
app.use(cors());

app.set('views', './views')
app.set('view engine', 'pug'); // rendering template

const port = process.env.TEST_VAR || 8080;

app.get('/', (req, res, next) => {
    res.json({
        welcome: "Welcome"
    });
})

app.use("/construction/json", constructionJson)
app.use("/construction/view", constructionView)

app.use((req, res, next) => {
    res.status(404);
    res.send("Error 404")
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})