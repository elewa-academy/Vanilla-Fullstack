let handler = {
    controller: {},
    handle: function() {

        let terminal_input = process.argv.slice(2);
        let operation = terminal_input[0];
        let num_1 = Number(terminal_input[1]);
        let num_2 = Number(terminal_input[2]);

        if (isNaN(num_1)) {
            num_1 = false;
        };
        if (isNaN(num_2)) {
            num_2 = false;
        }; 

        this.controller[operation](num_1, num_2);
    }
};

module.exports = handler;