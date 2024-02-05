const scan = require("readline-sync");
const Table = require("cli-table");
const result = [];

start()

function start(){
    console.clear(); 
    console.log("+-------------------------------------------+");
    console.log("+-------------------------------------------+");
    console.log("+-------------------------------------------+");
    console.log("+-------------------------------------------+");
    console.log("Pencacahan Ganjil & Genap [Angka Beda]");
    console.log("Contoh 1,2,3,4,5,6:ganjil or 1,2,3,4,5,6:genap");
    console.log("+-------------------------------------------+");
    var numerItems = scan.question("Masukkan: ");
    console.log("+-------------------------------------------+");
    console.log("+-------------------------------------------+");
    console.log("+-------------------------------------------+");
    console.log("+-------------------------------------------+");
    let args = numerItems.split(":");
    let section = args[1];
    if(section == ""){
        start();
    }
    let numeric = args[0];
    let numerIndex = numeric.split(",");
    console.log("Hasil Ratusan (" + section + ") - Angka Beda:");
    let indexVal = resultForNumeric(numerIndex, section);
    let index = indexVal.split("x");
    console.log(layoutingIndex(index[0], index[1], index[2]));
}

function layoutingIndex(ratIndex, pulIndex, satIndex){
    var grid = new Table({
        head: ["Ratusan", "Puluhan", "Satuan", "Bilangan"]
    });
    let res = parseInt(ratIndex) * parseInt(pulIndex) * parseInt(satIndex);
    grid.push([`${ratIndex}`, `${pulIndex}`, `${satIndex}`, `${res}`]);
    return grid.toString();
}

function resultForNumeric(index, type){
    let vals = [];
    let realIndex = [];
    Object.keys(index).forEach(num => {
        realIndex[num] = true;
        if(type == "ganjil"){
            if(num % 2 !== 0){
              vals[num] = true; //Untuk Genap = Ganjil
            }
        }else if(type == "genap"){
            if(num % 2 == 0){
              vals[num] = true; //Untuk Ganjil = Genap
            }
        }
    });
    let valSat = Object.keys(vals).length;
    if(isset(index[valSat])){
        delete(index[valSat]);
    }
    let valDex = index[0];
    if(valDex == 0){
        delete(index[valDex]);
    }
    let valRat = Object.keys(index).length;
    if(isset(realIndex[valSat]) && isset(realIndex[valRat])){
        delete(realIndex[valSat]);
        delete(realIndex[valRat]);
    }
    let valPul = Object.keys(realIndex).length;
    let newIndex = valRat + "x" + valPul + "x" + valSat;
    let res = parseInt(valRat) * parseInt(valPul) * parseInt(valSat);
    console.log(newIndex + " = " + res + " bilangan");
    console.log("+-------------------------------------------+");
    return newIndex;
}

function isset(object){
    return (typeof object !== "undefined");
}