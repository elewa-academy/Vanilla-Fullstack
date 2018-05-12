let app = require("./config");

// using body-parser
let parse_body = require("./parse-body");
app.use(parse_body);

let calc_service = require("./calc-service");
app.use("/calculator", calc_service)

let notes_service = require("./notes-service");
app.use("/notes", notes_service)



