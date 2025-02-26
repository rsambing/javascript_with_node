const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

let name;

prompt.question("What's your name?\n", answer => {
    name = answer;
    prompt.close();
});

prompt.on("close", () => {
    console.log("Welcome", name);
})
