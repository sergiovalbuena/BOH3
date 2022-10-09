export var totalTime = [];
export var totalProductsPriority1 = [];
export var totalProductsPriority2 = [];
export var totalProductsPriority3 = [];
export var totalProductsPriority1Time = [];
export var totalProductsPriority2Time = [];
export var totalProductsPriority3Time = [];

const taskContainer = document.querySelector("#task-container");

export default class Product {
  constructor({
    name,
    id,
    cantidadActual = undefined,
    prioridad1,
    prioridad2,
    prioridad3,
    idealStockWeekday,
    idealStockWeekend,
    recetasToDo,
    timeToBeDone
  }) {
    this.name = name;
    this.id = id;
    this.cantidadActual = cantidadActual;
    this.prioridad1 = prioridad1;
    this.prioridad2 = prioridad2;
    this.prioridad3 = prioridad3;
    this.idealStockWeekday = idealStockWeekday;
    this.idealStockWeekend = idealStockWeekend;
    this.recetasToDo = recetasToDo;
    this.timeToBeDone = timeToBeDone;
  }

  getActualStock() {
    //Parse input
    this.cantidadActual = parseInt(
      document.getElementById(`${this.id}`).value,
      10
    );

    //Logica
    //cuando el input es menor o igual a la prioirdad uno
    if (this.cantidadActual <= this.prioridad1) {
      //creating html elements
      const para = document.createElement("p");
      const node = document.createTextNode(
        `1 - ${this.name} ${this.recetasToDo}`
      );
      //appending to our .html
      para.appendChild(node);
      taskContainer.appendChild(para);

      //adding data to Arrays[];
      //time
      totalTime.push(this.timeToBeDone);
      //priority Group
      totalProductsPriority1.push(this.name);
      totalProductsPriority1Time.push(this.timeToBeDone);
    }

    //when input es <= than prioridad2
    else if (this.cantidadActual <= this.prioridad2) {
      //creating html elements
      const para = document.createElement("p");
      const node = document.createTextNode(
        `2 - ${this.name} ${this.recetasToDo}`
      );
      //appending to our .html
      para.appendChild(node);
      taskContainer.appendChild(para);

      //adding data to Arrays[];
      //time
      totalTime.push(this.timeToBeDone);
      //priority Group
      totalProductsPriority2.push(this.name);
      totalProductsPriority2Time.push(this.timeToBeDone);
    }

    //when input is <= than prioridad3
    else if (this.cantidadActual <= this.prioridad3) {
      //creating html elements
      const para = document.createElement("p");
      const node = document.createTextNode(
        `3 - ${this.name} ${this.recetasToDo}`
      );
      //appending to our .html
      para.appendChild(node);
      taskContainer.appendChild(para);

      //adding data to Arrays[];
      //time
      totalTime.push(this.timeToBeDone);
      //priority Group
      totalProductsPriority3.push(this.name);
      totalProductsPriority3Time.push(this.timeToBeDone);
    } else if (this.cantidadActual >= this.limite3) {
    }
  }

  // isThere1Stock(id, name, recetasToDo, timeToBeDone) {
  //   if (id.checked === true) {
  //   } else {
  //     const para = document.createElement("p");
  //     const node = document.createTextNode(`2 - ${name} ${recetasToDo}`);
  //     para.appendChild(node);
  //     taskContainer.appendChild(para);

  //     //adding data to Arrays[];
  //     //time
  //     totalTime.push(timeToBeDone);
  //     // //priority Group
  //     totalProductsPriority2.push(name);
  //   }
  // }
}

export const Avocado = new Product({
  name: "Avocado",
  id: "avocado",
  prioridad1: 1,
  prioridad2: 3,
  prioridad3: 5,
  idealStockWeekday: 6,
  idealStockWeekend: 7,
  recetasToDo: "3 rc",
  timeToBeDone: 100
});

export const PicoDeGallo = new Product({
  name: "Pico de Gallo",
  id: "picoDeGallo",
  prioridad1: 2,
  prioridad2: 4,
  prioridad3: 6,
  idealStockWeekday: 7,
  idealStockWeekend: 8,
  recetasToDo: "3 rc",
  timeToBeDone: 100
});

export const PicoDeGalloPastor = new Product({
  name: "Pico de Gallo Pastor",
  id: "picoDeGalloPastor",
  prioridad1: 1,
  prioridad2: 3,
  prioridad3: 5,
  idealStockWeekday: 6,
  idealStockWeekend: 7,
  recetasToDo: "3 rc",
  timeToBeDone: 42
});
export const OnionCilantro = new Product({
  name: "Onion & Cilantro",
  id: "onionCilantro",
  prioridad1: 2,
  prioridad2: 5,
  prioridad3: 8,
  idealStockWeekday: 8,
  idealStockWeekend: 10,
  recetasToDo: "3 rc",
  timeToBeDone: 34
});
export const Cilantro = new Product({
  name: "Cilantro",
  id: "cilantro",
  prioridad1: 1,
  prioridad2: 2,
  prioridad3: 3,
  idealStockWeekday: 3,
  idealStockWeekend: 4,
  recetasToDo: "6 bunches",
  timeToBeDone: 17
});
export const PickledOnion = new Product({
  name: "Pickled Onion",
  id: "pickledOnion",
  prioridad1: 2,
  prioridad2: 3,
  prioridad3: 4,
  recetasToDo: "6 Lts",
  timeToBeDone: 18
});
export const FetaCheese = new Product({
  name: "Feta Cheese",
  id: "fetaCheese",
  prioridad1: 2,
  prioridad2: 3,
  prioridad3: 4,
  recetasToDo: "1 rc",
  timeToBeDone: 18
});
export const Mozza1Lt = new Product({
  name: "Mozza Lt",
  id: "mozza1l",
  prioridad1: 2,
  prioridad2: 3,
  prioridad3: 4,
  recetasToDo: "1 Bag",
  timeToBeDone: 7
});
export const ChoppedLettuce = new Product({
  name: "Chopped Lettuce",
  id: "lettuce",
  prioridad1: 0,
  prioridad2: 1,
  prioridad3: 2,
  recetasToDo: "3 heads",
  timeToBeDone: 12
});
export const CabbageSlaw = new Product({
  name: "Cabbage Slaw",
  id: "cabagge",
  prioridad1: 1,
  prioridad2: 2,
  prioridad3: 3,
  recetasToDo: "3 rc",
  timeToBeDone: 22
});
export const BirriamenOnion = new Product({
  name: "Birriamen Onion",
  id: "birriamenOnion",
  prioridad1: 10,
  prioridad2: 30,
  prioridad3: 60,
  recetasToDo: "1 Lt",
  timeToBeDone: 22
});
export const BirriaTaco = new Product({
  name: "Birriamen Taco",
  id: "birriaTaco",
  prioridad1: 2,
  prioridad2: 4,
  prioridad3: 6,
  recetasToDo: "24 Tacos",
  timeToBeDone: 22
});
export const Limes = new Product({
  name: "Limes",
  id: "limes",
  prioridad1: 15,
  prioridad2: 30,
  prioridad3: 50,
  recetasToDo: "6 Limes",
  timeToBeDone: 5
});
export const Paprika = new Product({
  name: "Salt Paprika mix",
  id: "paprika",
  prioridad1: 20,
  prioridad2: 40,
  prioridad3: 60,
  recetasToDo: "1 rc",
  timeToBeDone: 10
});
export const Cinnamon = new Product({
  name: "Sugar Cinnamon mix",
  id: "cinnamon",
  prioridad1: 20,
  prioridad2: 40,
  prioridad3: 60,
  recetasToDo: "1 rc",
  timeToBeDone: 10
});

//checkboxs
export const Noodles = new Product({
  name: "Noodles",
  id: "noodles",
  recetasToDo: "5 Bags",
  timeToBeDone: 30
});
export const DryOnion = new Product({
  name: "Dry Onion",
  id: "dryOnion",
  recetasToDo: "3 rc",
  timeToBeDone: 10
});

export const Asada = new Product({
  name: "Asada",
  id: "asada",
  recetasToDo: "5 Bags",
  timeToBeDone: 52
});

export const DiabloEggs = new Product({
  name: "Diablo Eggs",
  id: "diabloEggs",
  recetasToDo: "6 eggs",
  timeToBeDone: 10
});

export const Pastor = new Product({
  name: "Pastor",
  id: "pastor",
  recetasToDo: "2 Bag",
  timeToBeDone: 67
});

export const Tuna = new Product({
  name: "Tuna",
  id: "tuna",
  recetasToDo: "2 loins",
  timeToBeDone: 37
});

export const Baja = new Product({
  name: "Baja",
  id: "baja",
  id2: "baja2",
  id3: "baja3",
  recetasToDo: "2 box",
  timeToBeDone: 12
});
export const Cabo = new Product({
  name: "Cabo",
  id: "cabo",
  recetasToDo: "1 box",
  timeToBeDone: 12
});

export const Cauli = new Product({
  name: "Cauliflower",
  id: "cauli",
  id2: "cauli2",
  id3: "cauli3",
  recetasToDo: "2 box",
  timeToBeDone: 4
});

export const Milanesa = new Product({
  name: "Milanesa",
  id: "milanesa",
  recetasToDo: "2 ct",
  timeToBeDone: 52
});

export const Crispy = new Product({
  name: "Crispy",
  id: "crispy",
  recetasToDo: "2 Box",
  timeToBeDone: 49
});

export const Chino = new Product({
  name: "Chino",
  id: "chino",
  recetasToDo: "1 Box",
  timeToBeDone: 1
});
export const Verde = new Product({
  name: "Verde",
  id: "verde",
  recetasToDo: "5 Bags",
  timeToBeDone: 1
});
export const Cruda = new Product({
  name: "Cruda",
  id: "cruda",
  recetasToDo: "5 Bags",
  timeToBeDone: 1
});

//Bottles
export const AnchoMiel = new Product({
  name: "Ancho Miel Btl",
  id: "anchoBottle",
  prioridad1: 1,
  prioridad2: 2,
  prioridad3: 3,
  recetasToDo: "4 Bottles",
  timeToBeDone: 10
});
export const Chipotle = new Product({
  name: "Chipotle",
  id: "chipotle",
  prioridad1: 2,
  prioridad2: 4,
  prioridad3: 6,
  recetasToDo: "8 Bottles",
  timeToBeDone: 5
});
export const Cream = new Product({
  name: "Cream",
  id: "cream",
  prioridad1: 1,
  prioridad2: 2,
  prioridad3: 3,
  recetasToDo: "4 Bottles",
  timeToBeDone: 15
});
export const BeansBottle = new Product({
  name: "Beans Bottle",
  id: "beans",
  prioridad1: 1,
  prioridad2: 2,
  prioridad3: 3,
  recetasToDo: "4 Bottles",
  timeToBeDone: 15
});
export const Botanera = new Product({
  name: "Botanera",
  id: "botanera",
  prioridad1: 1,
  prioridad2: 2,
  prioridad3: 3,
  recetasToDo: "3 Bottles",
  timeToBeDone: 5
});
export const Poblano = new Product({
  name: "Poblano",
  id: "poblano",
  prioridad1: 1,
  prioridad2: 2,
  prioridad3: 3,
  recetasToDo: "3 Bottles",
  timeToBeDone: 5
});
export const Tartara = new Product({
  name: "Tartara",
  id: "tartara",
  prioridad1: 1,
  prioridad2: 2,
  prioridad3: 3,
  recetasToDo: "3 Bottles",
  timeToBeDone: 5
});
export const Habanera = new Product({
  name: "Habanera",
  id: "habanera",
  prioridad1: 1,
  prioridad2: 2,
  prioridad3: 3,
  recetasToDo: "3 Bottles",
  timeToBeDone: 5
});
export const Guajillo = new Product({
  name: "Guajillo",
  id: "guajillo",
  prioridad1: 1,
  prioridad2: 2,
  prioridad3: 3,
  recetasToDo: "1 Bottles",
  timeToBeDone: 3
});
export const Arbol = new Product({
  name: "Arbol",
  id: "arbol",
  prioridad1: 1,
  prioridad2: 2,
  prioridad3: 3,
  recetasToDo: "2 Bottles",
  timeToBeDone: 3
});
export const Adobo = new Product({
  name: "Adobo Pastor",
  id: "adobo",
  prioridad1: 1,
  prioridad2: 2,
  prioridad3: 3,
  recetasToDo: "1 Bottles",
  timeToBeDone: 3
});
export const Cajeta = new Product({
  name: "Cajeta",
  id: "cajeta",
  prioridad1: 1,
  prioridad2: 2,
  prioridad3: 3,
  recetasToDo: "1 rc",
  timeToBeDone: 3
});
