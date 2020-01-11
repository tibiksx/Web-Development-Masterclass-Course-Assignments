var lista = [];

function add() {
  var addMe = prompt('Pe cine vrei sa adaugi?');
  lista.push(addMe);
  console.log('L-ai adaugat pe ' + addMe);
}

function remove() {
  var rmvMe = prompt('Pe cine vrei sa stergi?');
  for(var i = 0; i < lista.length; ++i) {
    if (lista[i] == rmvMe) {
      lista.splice(i, 1);
    }
  }
  console.log('L-ai sters pe ' + rmvMe);
}

function display() {
  console.log(lista);
}

var comanda;
while (comanda !== 'quit') {
  comanda = prompt('Comenzile sunt: add, remove, display si quit');
  if (comanda === 'add') {
    add();
  } else if (comanda === 'remove') {
    remove();
  } else if (comanda === 'display') {
    display();
  }
}
