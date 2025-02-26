{
    const math = require("./functions/math");

    console.log(math.sum(2, 5));
}

{
    const { sum } = require("./functions/math");

    console.log(sum(3, 8));
}

{
    const { sum, sub } = require("./functions/math");

    console.log(sum(3, 8));
    console.log(sub(20, 27));
}
