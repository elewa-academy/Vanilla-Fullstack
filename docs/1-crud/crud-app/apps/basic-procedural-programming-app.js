let model = require('../components/models/json-sync-model');

let terminal_input = process.argv.slice(2);
let command = terminal_input[0];
let args = terminal_input.slice(1);

console.log(model[command](...args));

console.log(model.read_all());



