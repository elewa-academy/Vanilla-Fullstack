let handler = {
    controller: {},
    clean_inputs: function() {
        
        let args = process.argv.slice(2);
        let a = Number(args[0]);
        let b = Number(args[1]);

        if (isNaN(a)) {
            a = false;
        };
        if (isNaN(b)) {
            b = false;
        };  

        return [a, b]
    },
    add: function() {
        let clean_inputs = this.clean_inputs();
        this.controller.add(clean_inputs[0], clean_inputs[1]);
    },
    subtract: function() {
        let clean_inputs = this.clean_inputs();
        this.controller.subtract(clean_inputs[0], clean_inputs[1]); 
    },
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