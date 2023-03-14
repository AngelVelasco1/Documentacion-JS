const function1 = function() {
    alert("Funcion 1 ejecutada llamandola desde la funcion 2")
};

const function2 = function(callback) {
    callback();
};
function2(function1);