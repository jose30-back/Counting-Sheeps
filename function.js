let list = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

let list2 = [ false, false, false ];

function countingSheeps (list) {
    let contador = 0;
    for (i=0; i < list.length; i++) {
        if (list[i] == true) {
            contador++;
        }
    }return contador;
};

let sheeps = countingSheeps(list);

if (sheeps > 0) {
    console.log("There are",sheeps,"sheep in total"); 

} else {
    console.log("UPS!!! Wolfs eaten Sheeps");
}





