var ph = require("./printHello");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("볓번 반복 출력할까요?? ", (answer) => {
  ph.printH(5);

  rl.close();
});
