const decrecer = (function() {
    let num = 10;
    return function() {
        num--;
        alert(num);
    };
})();

decrecer();
decrecer();
decrecer();
decrecer();
decrecer();
