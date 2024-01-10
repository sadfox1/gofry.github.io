
const fs = require('fs');

const internal = require('stream');
const fileName = 'bd.json';

var txtOUT = {
  etage: 1,
  Fspusk: {
      karton: 0,
      tovar: 0,
      pustye: 0,
      sc: 0
  },
  Sspusk: {
      karton: 0,
      tovar: 0,
      pustye: 0,
      sc: 0
  },
  Tspusk: {
      karton: 0,
      tovar: 0,
      pustye: 0,
      sc: 0
  },
  cp:     {
      karton: 0,
      tovar: 0,
      pustye: 0,
      sc: 0
  }
};



function saveOtchet(mess){
  fs.writeFile(fileName, JSON.stringify(mess), (err) => {
    console.log('Данные сохранены в файл');
  });
}







