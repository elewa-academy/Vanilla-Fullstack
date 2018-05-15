function add_handler() {
    var a; // to tell the difference between no number and 0
    var pre_a = document.getElementById("number1").value;
    if (pre_a == '') {
        a = undefined; // try Number('') to see why I do this
    } else {
        a = Number(pre_a);
    };

    var b;
    var pre_b = document.getElementById("number2").value;
    if (pre_b == '') {
        b = undefined;
    } else {
        b = Number(pre_b);
    }

    api_connection.post(["add"], {a: a, b: b});

};