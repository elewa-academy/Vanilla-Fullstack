//      learning tasks
// access /all then /reset - explain what happens in the console
// change shuffle around the routes, what happens?

let express = require("express")
let app = express()

// Body parser for forms - middleware
let bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

let handler = require("./express-handler");
app.use(handler);

app.listen(3001, function() {
    console.log("litening in port 3001")
})



