const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

async function tebakAngka() {
  try {
    let num = Math.floor(Math.random() * 100);
    let jawaban = false;
    let i = 1;
    const regex = /^(100|[1-9]?[0-9])$/
    while (!jawaban) {
      const input = await rl.question("tebak angka ? ");
      let answer = parseInt(input);
      if (!regex.test(answer)) {
        throw new Error("invalid, inputnya harus angka 0 - 100");
      }

      if (answer > num) {
        console.log(`angka telalu besar !`);
        i++;
      } else if (answer < num) {
        console.log(`angaka telalu kecil !`);
        i++;
      } else {
        console.log(`benar, anda menghabiskan ${i} tebakan`);
        jawaban = true;
      }
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    rl.close();
  }
}

tebakAngka();

