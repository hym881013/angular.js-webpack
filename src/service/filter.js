myApp.filter('colors', function () {
    return function (value, fixed) {
        return colors(value, fixed);
    }

    function colors(value, fixed) {
        if (isNaN(value)) {
            return "";
        }
        if (isNaN(fixed)) {
            value = parseFloat(value);
        } else {
            value = parseFloat(value).toFixed(fixed);
        };
        if (value > 0) {
            return "red"
        } else if (value < 0) {
            return "green"
        }
    }
});