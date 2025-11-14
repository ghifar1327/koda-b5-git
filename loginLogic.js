const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

const validCreds = [
      {
        userName: "ghifar",
        password: "ghifar123",
      },
      {
        userName: "pacar",
        password: "pacar123",
      },
    ];

async function login() {
  try {
    
    let masuk = false;
    let kesempatan = 3;
    while (!masuk) {
      const inputUsername = await rl.question("masukan username : ");
      const inputPassword = await rl.question("masukan inputPassword : ");
      if (kesempatan === 0) {
        throw new Error("kesempatan telah habis")
      }
    //   console.log(kesempatan)
      const dataUser = validCreds.find(data => data.userName == inputUsername)
        if(!dataUser){
            console.log(`username '${inputUsername}' tidak ditemukan`)
            kesempatan--
        }else if(dataUser.password != inputPassword){
            console.log('password salah')
            kesempatan--
        }else{
            console.log(`selamat datang ${inputUsername}`)
            masuk= true
        }
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    rl.close();
  }
}
login();