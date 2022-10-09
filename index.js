//import { saveTask, getTask } from "./firebase.js";
import { taskForm, calcBtn } from "./nodos.js";

import {
  isThere1Stock,
  isThere2Stock,
  isThere3Stock
} from "./checkboxsLogic.js";
import {
  PicoDeGallo,
  Avocado,
  PicoDeGalloPastor,
  OnionCilantro,
  Noodles,
  DryOnion,
  Cilantro,
  PickledOnion,
  FetaCheese,
  Mozza1Lt,
  ChoppedLettuce,
  CabbageSlaw,
  BirriamenOnion,
  BirriaTaco,
  Limes,
  Paprika,
  Cinnamon,
  AnchoMiel,
  Chipotle,
  Cream,
  BeansBottle, //
  Botanera,
  Poblano,
  Tartara,
  Habanera,
  Guajillo,
  Arbol,
  Adobo,
  Cajeta,
  Tuna,
  Crispy,
  Cauli,
  Baja,
  Cabo,
  Pastor,
  Asada,

  //arrays
  totalTime,
  totalProductsPriority1,
  totalProductsPriority2,
  totalProductsPriority3,
  totalProductsPriority1Time
} from "./productsClasses_DB.js";
import { timeConverter } from "./timeConverter.js";

// window.addEventListener("DOMContentLoaded", async () => {
//   console.log("it works!");

//   const querySnapshot = await getTask();
//   console.log(querySnapshot);
//   // querySnapshot.forEach(doc => {
//   //   console.log(doc.data());
//   // })
// });

//traer los inputs (html) para pasarselos a la DB:
//const title = taskForm["task-title"];
// const picoDeGallo = taskForm["picoDeGallo"];
// const avocado = taskForm["avocado"];
// const picoDeGalloPastor = taskForm["picoDeGalloPastor"];
// const cilantro = taskForm["cilantro"];

calcBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("task-container").replaceChildren();
  totalTime.length = 0;

  //Calling Object function to render result
  PicoDeGallo.getActualStock();
  Avocado.getActualStock();
  PicoDeGalloPastor.getActualStock();
  OnionCilantro.getActualStock();
  Cilantro.getActualStock();
  PickledOnion.getActualStock();
  FetaCheese.getActualStock();
  Mozza1Lt.getActualStock();
  ChoppedLettuce.getActualStock();
  CabbageSlaw.getActualStock();
  BirriamenOnion.getActualStock();
  BirriaTaco.getActualStock();
  Limes.getActualStock();
  Paprika.getActualStock();
  Cinnamon.getActualStock();

  //Bottles
  AnchoMiel.getActualStock();
  Chipotle.getActualStock();
  Cream.getActualStock();
  BeansBottle.getActualStock();
  Botanera.getActualStock();
  Poblano.getActualStock();
  Tartara.getActualStock();
  Habanera.getActualStock();
  Guajillo.getActualStock();
  Arbol.getActualStock();
  Adobo.getActualStock();
  Cajeta.getActualStock();

  //CheckBox calls function
  //isThere1Stock(Noodles.id, Noodles.name, Noodles.recetasToDo);
  isThere1Stock(
    noodles,
    Noodles.name,
    Noodles.recetasToDo,
    Noodles.timeToBeDone
  );
  isThere1Stock(
    dryOnion,
    DryOnion.name,
    DryOnion.recetasToDo,
    DryOnion.timeToBeDone
  );

  isThere1Stock(crispy, Crispy.name, Crispy.recetasToDo, Crispy.timeToBeDone);
  isThere1Stock(tuna, Tuna.name, Tuna.recetasToDo, Tuna.timeToBeDone);

  isThere3Stock(
    cauli,
    cauli2,
    cauli3,
    Cauli.name,
    Cauli.recetasToDo,
    Cauli.timeToBeDone
  );

  isThere3Stock(
    baja,
    baja2,
    baja3,
    Baja.name,
    Baja.recetasToDo,
    Baja.timeToBeDone
  );

  isThere3Stock(
    cabo,
    cabo2,
    cabo3,
    Cabo.name,
    Cabo.recetasToDo,
    Cabo.timeToBeDone
  );
  isThere3Stock(
    asada,
    asada2,
    asada3,
    Asada.name,
    Asada.recetasToDo,
    Asada.timeToBeDone
  );

  isThere3Stock(
    pastor,
    pastor2,
    pastor3,
    Pastor.name,
    Pastor.recetasToDo,
    Pastor.timeToBeDone
  );
  //let date = new Date();
  //Store in DB
  // saveTask(
  //   date,
  //   title.value,
  //   parseInt(PicoDeGallo.value),
  //   parseInt(Avocado.value),
  //   parseInt(PicoDeGalloPastor.value),
  //   parseInt(OnionCilantro.value),
  //   parseInt(Cilantro.value),
  //   parseInt(PickledOnion.value)
  // );

  taskForm.reset();

  //PRINT TOTAL TIME
  console.log(totalTime);
  console.log(totalProductsPriority1);
  console.log(totalProductsPriority2);

  const totalTimeInMinutes = 0;

  const sumProducts = totalTime.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    totalTimeInMinutes
  );

  const sumProductsPriority1 = totalProductsPriority1Time.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    totalTimeInMinutes
  );

  console.log(totalTime.length + " totalTime.length");

  const taskContainer = document.querySelector("#task-container");
  const para = document.createElement("p");
  const node = document.createTextNode(
    `
    Total Items: ${totalTime.length}
    Total Time: ${timeConverter(sumProducts)}
    `
  );

  const para1 = document.createElement("p");
  const node1 = document.createTextNode(
    `    
    Priority 1 Items: ${totalProductsPriority1.length}
    Time Priority: ${timeConverter(sumProductsPriority1)}
    `
  );

  console.log(sumProducts + " sumProducts, suma en minutos");
  console.log(timeConverter(sumProducts) + "minutos pasados a tiempo");
  console.log(sumProductsPriority1 + " sumProductsPriotiy1");
  console.log(totalProductsPriority1Time + " sumProductsPriotiy1TIME");

  //appending to our .html
  para.appendChild(node);
  taskContainer.appendChild(para);

  para1.appendChild(node1);
  taskContainer.appendChild(para1);

  //take to the buttom
  window.scrollTo(0, document.body.scrollHeight);
});

//BOTON DE BORRAR
const deleteBtn = document.querySelector(".deleteBtn");
deleteBtn.addEventListener("click", () => {
  console.log("borrado completo!");
  document.getElementById("task-container").replaceChildren();

  totalTime.length = 0;
  console.log(totalTime.length + "post borrado");
  // totalProductsPriority1 = [];
  // totalProductsPriority2 = [];
  // totalProductsPriority3 = [];
});
