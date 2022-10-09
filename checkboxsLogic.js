import {
  totalTime,
  totalProductsPriority1,
  totalProductsPriority2,
  totalProductsPriority3,
  totalProductsPriority1Time,
  totalProductsPriority2Time,
  totalProductsPriority3Time
} from "./productsClasses_DB.js";

//CheckBox Logic:
//1 checkbox;
const taskContainer = document.querySelector("#task-container");

export function isThere1Stock(id, name, recetasToDo, timeToBeDone) {
  if (id.checked === true) {
  } else {
    const para = document.createElement("p");
    const node = document.createTextNode(`2 - ${name} ${recetasToDo}`);
    para.appendChild(node);
    taskContainer.appendChild(para);

    //adding data to Arrays[];
    //time
    totalTime.push(timeToBeDone);
    // //priority Group
    totalProductsPriority2.push(name);
    totalProductsPriority2Time.push(timeToBeDone);
  }
}

//2 checkboxs:
export function isThere2Stock(id, id2, name, recetasToDo) {
  if (id.checked === true && id2.checked === true) {
  } else if (id.checked === true && id2.checked === false) {
    const para = document.createElement("p");
    const node = document.createTextNode(`2 - ${name} ${recetasToDo}`);
    para.appendChild(node);
    taskContainer.appendChild(para);
  } else if (id.checked === false && id2.checked === false) {
    const para = document.createElement("p");
    const node = document.createTextNode(`1 - ${name} ${recetasToDo}`);
    para.appendChild(node);
    taskContainer.appendChild(para);
  } else {
  }
}

//3 checkboxs:
export function isThere3Stock(id, id2, id3, name, recetasToDo, timeToBeDone) {
  if (id.checked === true && id2.checked === true && id3.checked === true) {
  } else if (
    id.checked === true &&
    id2.checked === true &&
    id3.checked === false
  ) {
    const para = document.createElement("p");
    const node = document.createTextNode(`3 - ${name} ${recetasToDo}`);
    para.appendChild(node);
    taskContainer.appendChild(para);

    totalTime.push(timeToBeDone);
    totalProductsPriority3.push(name);
    totalProductsPriority3Time.push(timeToBeDone);
  } else if (
    id.checked === true &&
    id2.checked === false &&
    id3.checked === false
  ) {
    const para = document.createElement("p");
    const node = document.createTextNode(`2 - ${name} ${recetasToDo}`);
    para.appendChild(node);
    taskContainer.appendChild(para);

    totalTime.push(timeToBeDone);
    totalProductsPriority2.push(name);
    totalProductsPriority2Time.push(timeToBeDone);
  } else if (
    id.checked === false &&
    id2.checked === false &&
    id3.checked === false
  ) {
    const para = document.createElement("p");
    const node = document.createTextNode(`1 - ${name} ${recetasToDo}`);
    para.appendChild(node);
    taskContainer.appendChild(para);

    totalTime.push(timeToBeDone);
    totalProductsPriority1.push(name);
    totalProductsPriority1Time.push(timeToBeDone);
  } else {
  }
}

//4 checkboxs:
// export function isThere4Stock(id, id2, id3, id4, name, recetasToDo) {
//   if (
//     id.checked === true &&
//     id2.checked === true &&
//     id3.checked === true &&
//     id4.checked === true
//   ) {
//   } else {
//     const para = document.createElement("p");
//     const node = document.createTextNode(`2 - ${name} ${recetasToDo}`);
//     para.appendChild(node);
//     result.appendChild(para);
//   }
// }
