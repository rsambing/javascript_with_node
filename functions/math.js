function sum(a, b)
{
    return (a + b);
}

function sub(a, b)
{
    return (a - b);
}

//common js -> module.exports = { function }

module.exports = { sum, sub };

// module.exports = sum; tornar uma unica funcao
