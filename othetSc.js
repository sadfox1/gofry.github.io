//let backBTN = document.getElementById("backBTN");

let obj = {
     "c" : "hui",
     "r" : "hrew",
     "g" : "hrew"
}

// backBTN.addEventListener("click", function(e){
//     window.location.href = 'index.html';
// });

// подключаем модуль для работы с файловой системой
const fs = require('fs');

// данные, которые нужно сохранить в файл
// имя файла, в который нужно сохранить данные
const fileName = 'bd.json';
obj = {
    "c" :  Math.random(),
    "r" : Math.random(),
    "g" : Math.random()
}

// вызываем метод writeFile для записи данных в файл
fs.writeFile(fileName, JSON.stringify(obj), (err) => {
  // если произошла ошибка, выбрасываем исключение
  if (err) throw err;
  // выводим сообщение об успешной записи
  console.log('Данные сохранены в файл');
});
console.log("Мб записалось");

