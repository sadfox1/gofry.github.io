

let txtArea = document.getElementById("txtOutDOM");
let etageSELECT = document.getElementById("inpEtage");
let spuskSELECT = document.getElementById("inpSpusk");
let kartonDiv = document.getElementById("inpKARTON");
let tovarDiv = document.getElementById("inpTOVAR");
let pustyeDiv = document.getElementById("inpPUSTYE");
let kartonCount = document.getElementById("kartonCount");
let scDiv = document.getElementById("inpSC");
let scCount = document.getElementById("scCount");
let tovarCount = document.getElementById("tovarCount");
let pustyeCount = document.getElementById("pustyeCount");
let copyBTN = document.getElementById("copyBTN");
let mess = document.getElementById("mess");
let leftBlock = document.getElementById("leftBlock");
let leftBlockBTN = document.getElementById("leftBlockBTN");
let darkSW = document.getElementById("darkSW");
let otgetBTN = document.getElementById("otgetBTN");


let darkMODE = false;
let lightColor = "#ffffff";
let darkColor = "#3c3c3c";

let txtOUT = {
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


let txtAreaOUT = "";

etageSELECT.addEventListener("input", function(e){
    txtOUT.etage = etageSELECT.selectedIndex + 1;
    setNum();
    outProc();
    sendOtchet();
});
spuskSELECT.addEventListener("input", function(e){
    setNum();
});

document.addEventListener("click", function(e){
    outProc();
});

otgetBTN.addEventListener("click", function(e){
    window.location.href = 'otchet.html';
});



function outProc(){
    txtAreaOUT = "Kазань 1 Блок " + txtOUT.etage + " этаж. \n";

    txtAreaOUT += "1 спуск: ";
    if((txtOUT.Fspusk.tovar > 0 || txtOUT.Fspusk.sc > 0 || txtOUT.Fspusk.pustye > 0) && txtOUT.Fspusk.karton > 0) txtAreaOUT += txtOUT.Fspusk.karton + " картон, ";
    else if(txtOUT.Fspusk.karton > 0) txtAreaOUT += txtOUT.Fspusk.karton + " картон. ";

    if((txtOUT.Fspusk.sc > 0 || txtOUT.Fspusk.pustye > 0) && txtOUT.Fspusk.tovar > 0) txtAreaOUT += txtOUT.Fspusk.tovar+ " товар, ";
    else if(txtOUT.Fspusk.tovar > 0) txtAreaOUT += txtOUT.Fspusk.tovar + " товар. ";

    if(txtOUT.Fspusk.pustye > 0 && txtOUT.Fspusk.sc > 0) txtAreaOUT += txtOUT.Fspusk.sc+ " СЦ, ";
    else if(txtOUT.Fspusk.sc > 0) txtAreaOUT += txtOUT.Fspusk.sc + " СЦ. ";

    if(txtOUT.Fspusk.pustye > 0) txtAreaOUT += txtOUT.Fspusk.pustye + " пустых. ";
    txtAreaOUT += "\n";

    txtAreaOUT += "2 спуск: ";
    if((txtOUT.Sspusk.tovar > 0 || txtOUT.Sspusk.sc > 0 || txtOUT.Sspusk.pustye > 0) && txtOUT.Sspusk.karton > 0) txtAreaOUT += txtOUT.Sspusk.karton + " картон, ";
    else if(txtOUT.Sspusk.karton > 0) txtAreaOUT += txtOUT.Sspusk.karton + " картон. ";

    if((txtOUT.Sspusk.sc > 0 || txtOUT.Sspusk.pustye > 0) && txtOUT.Sspusk.tovar > 0) txtAreaOUT += txtOUT.Sspusk.tovar+ " товар, ";
    else if(txtOUT.Sspusk.tovar > 0) txtAreaOUT += txtOUT.Sspusk.tovar + " товар. ";

    if(txtOUT.Sspusk.pustye > 0 && txtOUT.Sspusk.sc > 0) txtAreaOUT += txtOUT.Sspusk.sc+ " СЦ, ";
    else if(txtOUT.Sspusk.sc > 0) txtAreaOUT += txtOUT.Sspusk.sc + " СЦ. ";

    if(txtOUT.Sspusk.pustye > 0) txtAreaOUT += txtOUT.Sspusk.pustye + " пустых. ";
    txtAreaOUT += "\n";

    txtAreaOUT += "3 спуск: ";
    if((txtOUT.Tspusk.tovar > 0 || txtOUT.Tspusk.sc > 0 || txtOUT.Tspusk.pustye > 0) && txtOUT.Tspusk.karton > 0) txtAreaOUT += txtOUT.Tspusk.karton + " картон, ";
    else if(txtOUT.Tspusk.karton > 0) txtAreaOUT += txtOUT.Tspusk.karton + " картон. ";

    if((txtOUT.Tspusk.sc > 0 || txtOUT.Tspusk.pustye > 0) && txtOUT.Tspusk.tovar > 0) txtAreaOUT += txtOUT.Tspusk.tovar+ " товар, ";
    else if(txtOUT.Tspusk.tovar > 0) txtAreaOUT += txtOUT.Tspusk.tovar + " товар. ";

    if(txtOUT.Tspusk.pustye > 0 && txtOUT.Tspusk.sc > 0) txtAreaOUT += txtOUT.Tspusk.sc+ " СЦ, ";
    else if(txtOUT.Tspusk.sc > 0) txtAreaOUT += txtOUT.Tspusk.sc + " СЦ. ";

    if(txtOUT.Tspusk.pustye > 0) txtAreaOUT += txtOUT.Tspusk.pustye + " пустых. ";
    txtAreaOUT += "\n";

    txtAreaOUT += "ЦП: ";
    if((txtOUT.cp.tovar > 0 || txtOUT.cp.sc > 0 || txtOUT.cp.pustye > 0) && txtOUT.cp.karton > 0) txtAreaOUT += txtOUT.cp.karton + " картон, ";
    else if(txtOUT.cp.karton > 0) txtAreaOUT += txtOUT.cp.karton + " картон. ";

    if((txtOUT.cp.sc > 0 || txtOUT.cp.pustye > 0) && txtOUT.cp.tovar > 0) txtAreaOUT += txtOUT.cp.tovar+ " товар, ";
    else if(txtOUT.cp.tovar > 0) txtAreaOUT += txtOUT.cp.tovar + " товар. ";

    if(txtOUT.cp.pustye > 0 && txtOUT.cp.sc > 0) txtAreaOUT += txtOUT.cp.sc+ " СЦ, ";
    else if(txtOUT.cp.sc > 0) txtAreaOUT += txtOUT.cp.sc + " СЦ. ";

    if(txtOUT.cp.pustye > 0) txtAreaOUT += txtOUT.cp.pustye + " пустых. ";
    txtAreaOUT += "\n";
    
    txtArea.innerHTML = txtAreaOUT;

    setNum();
}

function setNum(){
    if(spuskSELECT.selectedIndex == 0){
        kartonCount.innerHTML = ": " + txtOUT.Fspusk.karton;
        tovarCount.innerHTML = ": " + txtOUT.Fspusk.tovar;
        pustyeCount.innerHTML = ": " + txtOUT.Fspusk.pustye;
        scCount.innerHTML = ": " + txtOUT.Fspusk.sc;
    }
    else if(spuskSELECT.selectedIndex == 1){
        kartonCount.innerHTML = ": " + txtOUT.Sspusk.karton;
        tovarCount.innerHTML = ": " + txtOUT.Sspusk.tovar;
        pustyeCount.innerHTML = ": " + txtOUT.Sspusk.pustye;
        scCount.innerHTML = ": " + txtOUT.Sspusk.sc;
    }
    else if(spuskSELECT.selectedIndex == 2){
        kartonCount.innerHTML = ": " + txtOUT.Tspusk.karton;
        tovarCount.innerHTML = ": " + txtOUT.Tspusk.tovar;
        pustyeCount.innerHTML = ": " + txtOUT.Tspusk.pustye;
        scCount.innerHTML = ": " + txtOUT.Tspusk.sc;
    }
    else if(spuskSELECT.selectedIndex == 3){
        kartonCount.innerHTML = ": " + txtOUT.cp.karton;
        tovarCount.innerHTML = ": " + txtOUT.cp.tovar;
        pustyeCount.innerHTML = ": " + txtOUT.cp.pustye;
        scCount.innerHTML = ": " + txtOUT.cp.sc;
    }
}

kartonDiv.children[3].addEventListener("click", function(e){

    if(spuskSELECT.selectedIndex == 0 && txtOUT.Fspusk.karton > 0)txtOUT.Fspusk.karton -= 1;
    else if(spuskSELECT.selectedIndex == 1 && txtOUT.Sspusk.karton > 0)txtOUT.Sspusk.karton -= 1;
    else if(spuskSELECT.selectedIndex == 2 && txtOUT.Tspusk.karton > 0)txtOUT.Tspusk.karton -= 1;
    else if(spuskSELECT.selectedIndex == 3 && txtOUT.cp.karton > 0)txtOUT.cp.karton -= 1;
    else console.log("Не может быть меньше 0");
    console.log("Убавить картон");


});
kartonDiv.children[4].addEventListener("click", function(e){
    if(spuskSELECT.selectedIndex == 0)txtOUT.Fspusk.karton += 1;
    if(spuskSELECT.selectedIndex == 1)txtOUT.Sspusk.karton += 1;
    if(spuskSELECT.selectedIndex == 2)txtOUT.Tspusk.karton += 1;
    if(spuskSELECT.selectedIndex == 3)txtOUT.cp.karton += 1;
    console.log("Добавить картон");

});


tovarDiv.children[3].addEventListener("click", function(e){
    if(spuskSELECT.selectedIndex == 0 && txtOUT.Fspusk.tovar > 0)txtOUT.Fspusk.tovar -= 1;
    else if(spuskSELECT.selectedIndex == 1 && txtOUT.Sspusk.tovar > 0)txtOUT.Sspusk.tovar -= 1;
    else if(spuskSELECT.selectedIndex == 2 && txtOUT.Tspusk.tovar > 0)txtOUT.Tspusk.tovar -= 1;
    else if(spuskSELECT.selectedIndex == 3 && txtOUT.cp.tovar > 0)txtOUT.cp.tovar -= 1;
    else console.log("Не может быть меньше 0");
    console.log("Убавить товар");
});
tovarDiv.children[4].addEventListener("click", function(e){
    if(spuskSELECT.selectedIndex == 0)txtOUT.Fspusk.tovar += 1;
    if(spuskSELECT.selectedIndex == 1)txtOUT.Sspusk.tovar += 1;
    if(spuskSELECT.selectedIndex == 2)txtOUT.Tspusk.tovar += 1;
    if(spuskSELECT.selectedIndex == 3)txtOUT.cp.tovar += 1;
    console.log("Добавить товар");
});


pustyeDiv.children[3].addEventListener("click", function(e){
    if(spuskSELECT.selectedIndex == 0 && txtOUT.Fspusk.pustye > 0)txtOUT.Fspusk.pustye -= 1;
    else if(spuskSELECT.selectedIndex == 1 && txtOUT.Sspusk.pustye > 0)txtOUT.Sspusk.pustye -= 1;
    else if(spuskSELECT.selectedIndex == 2 && txtOUT.Tspusk.pustye > 0)txtOUT.Tspusk.pustye -= 1;
    else if(spuskSELECT.selectedIndex == 3 && txtOUT.cp.pustye > 0)txtOUT.cp.pustye -= 1;
    else console.log("Не может быть меньше 0");
    console.log("Убавить пустые");
});
pustyeDiv.children[4].addEventListener("click", function(e){
    if(spuskSELECT.selectedIndex == 0)txtOUT.Fspusk.pustye += 1;
    if(spuskSELECT.selectedIndex == 1)txtOUT.Sspusk.pustye += 1;
    if(spuskSELECT.selectedIndex == 2)txtOUT.Tspusk.pustye += 1;
    if(spuskSELECT.selectedIndex == 3)txtOUT.cp.pustye += 1;
    console.log("Добавить пустые");
});

scDiv.children[3].addEventListener("click", function(e){
    if(spuskSELECT.selectedIndex == 0 && txtOUT.Fspusk.sc > 0)txtOUT.Fspusk.sc -= 1;
    else if(spuskSELECT.selectedIndex == 1 && txtOUT.Sspusk.sc > 0)txtOUT.Sspusk.sc -= 1;
    else if(spuskSELECT.selectedIndex == 2 && txtOUT.Tspusk.sc > 0)txtOUT.Tspusk.sc -= 1;
    else if(spuskSELECT.selectedIndex == 3 && txtOUT.cp.sc > 0)txtOUT.cp.sc -= 1;
    else console.log("Не может быть меньше 0");
    console.log("Убавить СЦ");
});
scDiv.children[4].addEventListener("click", function(e){
    if(spuskSELECT.selectedIndex == 0)txtOUT.Fspusk.sc += 1;
    if(spuskSELECT.selectedIndex == 1)txtOUT.Sspusk.sc += 1;
    if(spuskSELECT.selectedIndex == 2)txtOUT.Tspusk.sc += 1;
    if(spuskSELECT.selectedIndex == 3)txtOUT.cp.sc += 1;
    console.log("Добавить СЦ");
});

copyBTN.addEventListener("click", function(e){
    txtArea.select();
    document.execCommand("copy");
    mess.classList.remove("hid");
    setTimeout(function(){
        mess.classList.add("hid");
    }, 1000);
});

leftBlockBTN.addEventListener("click", function(e){
    if(leftBlock.className == "hideLeftBlock"){
        leftBlock.classList.remove("hideLeftBlock");
        leftBlock.classList.add("showLeftBlock");
    }
    else if(leftBlock.className == "showLeftBlock") {
        leftBlock.classList.remove("showLeftBlock");
        leftBlock.classList.add("hideLeftBlock");
    }
    else{
        leftBlock.classList.add("showLeftBlock");
    }
});

darkSW.addEventListener("click", function(e){
    darkMODE = darkSW.checked;
    console.log(darkSW.checked);
    darkThemeComp();
    localStorage.setItem("darkMODEsw", darkMODE);
});

window.onload = function(){
    if(localStorage.getItem("darkMODEsw") == "true"){
        darkSW.checked = true;
        darkMODE = darkSW.checked;
    }
    else {
        darkSW.checked = false;
        darkMODE = darkSW.checked;
    }
    darkThemeComp();
    
};




function darkThemeComp(){
    if(darkMODE){
        document.body.style.backgroundColor = darkColor;
        txtArea.style.backgroundColor = "#131313";
        txtArea.style.color = lightColor;
        document.body.style.color = lightColor;
        leftBlock.style.backgroundColor = "#181818";
        inpEtage.style.backgroundColor = "#131313";
        inpEtage.style.color = lightColor;
        inpSpusk.style.backgroundColor = "#131313";
        inpSpusk.style.color = lightColor;
    }
    else if(!darkMODE){
        document.body.style.backgroundColor = lightColor;
        txtArea.style.backgroundColor = lightColor;
        document.body.style.color = darkColor;
        leftBlock.style.backgroundColor = "#cdcdcd";
        txtArea.style.color = darkColor;
        inpSpusk.style.backgroundColor = lightColor;
        inpSpusk.style.color = darkColor;
        inpEtage.style.backgroundColor = lightColor;
        inpEtage.style.color = darkColor;
    }
}


function sendOtchet(){
    
}