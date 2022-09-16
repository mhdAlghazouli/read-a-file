const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const fs = require('fs');

readline.question('file name: ',function(filename){
  readline.close();
  fs.readFile(filename,'utf8', (error,data) => {
    if(error){
      console.log(error.message);
      return;
    }else{
      console.log(data)
    }
  })
})