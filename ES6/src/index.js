const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const asyncReadFile = async function () {
  const f1 = await readFile('a.txt');
  const f2 = await readFile('b.txt');
  //console.log(f1.toString());
  //console.log(f2.toString());
};

asyncReadFile().then(x=>{console.log(x)})