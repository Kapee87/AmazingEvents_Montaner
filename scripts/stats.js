//declaraciones
const higherPercentage = document.getElementById("highestPercentage");
const lowerPercentage = document.getElementById("lowerPercentage");
const largerCapacity = document.getElementById("largerCapacity");
const upcoming = document.getElementById("upcoming");
const past = document.getElementById("past");
const apiWorkingLabel = document.getElementById("apiWorking");

let dataEvent = [];
let pastEvents = [];
let upcomingEvents = [];
let currentDate;
let categoryArray = [];
let revenue = [];
let categoryAttendance = [];

//funciones
function setArray(array, timeFilter) {
  let eventArray = array.map((e) => e);
  if (timeFilter === "past") {
    return (eventArray = array.filter(
      (e) => Date.parse(currentDate) > Date.parse(e.date)
    ));
  } else if (timeFilter === "upcoming") {
    return (eventArray = array.filter(
      (e) => Date.parse(currentDate) < Date.parse(e.date)
    ));
  }
  //   console.log(eventArray);
  return eventArray;
}
function setFirstTable() {
  higherPercentage.innerHTML = higherAttendance();
  lowerPercentage.innerHTML = lowerAttendance();
  largerCapacity.innerHTML = getLargerCapacity();
}
function setRevenuesTable(pastUpcoming, assistOrEstimate) {
  getCategories(pastUpcoming);
  getRevenues(pastUpcoming, getCategories(pastUpcoming), assistOrEstimate);
  getCategoriesAttendance(pastUpcoming, assistOrEstimate);
  createCategoryTd(assistOrEstimate);
}
function higherAttendance() {
  let higherArray = [];
  pastEvents.forEach((element) => {
    higherArray.push(attendancePercentage(element));
    // console.log((element.assistance * 100) / element.capacity);
  });
  let name = pastEvents[higherArray.indexOf(Math.max(...higherArray))].name;
  let percentaje = Math.max(...higherArray);
  return `${name} (${percentaje}%)`;
}
function lowerAttendance() {
  let lowerArray = [];
  pastEvents.forEach((element) => {
    lowerArray.push(attendancePercentage(element));
    // console.log((element.assistance * 100) / element.capacity);
  });
  let name = pastEvents[lowerArray.indexOf(Math.min(...lowerArray))].name;
  let percentaje = Math.min(...lowerArray);
  return `${name} (${percentaje}%)`;
}
function attendancePercentage(element) {
  return (element.assistance * 100) / element.capacity;
}
function getLargerCapacity() {
  let capacityArray = [];
  pastEvents.forEach((element) => {
    capacityArray.push(element.capacity);
  });
  let name = pastEvents[capacityArray.indexOf(Math.max(...capacityArray))].name;
  let percentaje = Math.max(...capacityArray);
  return `${name} (${percentaje})`;
}
function getCategories(array) {
  categoryArray = [];
  array.forEach((element) => {
    if (!categoryArray.includes(element.category)) {
      categoryArray.push(element.category);
    }
  });

  //   console.log(categoryArray);
  return categoryArray;
}
function getRevenues(array, category, factor) {
  //   console.log(array);
  revenue = [];
  let sumador = 0;
  category.forEach((e) => {
    array.forEach((el) => {
      if (e.includes(el.category)) {
        sumador += el.price * el[factor];
      }
    });
    revenue.push(sumador);
  });
  /* console.log(revenue);
  console.log(category); */
}
function getCategoriesAttendance(array, assistOrEstimate) {
  categoryAttendance = [];
  categoryArray.forEach((c) => {
    let sumAssist = 0;
    let sumCapacity = 0;
    array.forEach((e) => {
      if (c.includes(e.category)) {
        sumAssist += e[assistOrEstimate];
        sumCapacity += e.capacity;
      }
    });
    // categoryAttendance.push(sum / categoryAttendance.length);
    categoryAttendance.push(Number((sumAssist / sumCapacity) * 100).toFixed(2));
  });
  //   console.log(categoryAttendance);
}
function createCategoryTd(assistOrEstimate) {
  let tempInner = "";
  //   console.log(pastEvents);
  if (assistOrEstimate === "assistance") {
    categoryArray.forEach((cat) => {
      tempInner += `
        <tr>
            <td>${cat}</td>
            <td>$ ${revenue[categoryArray.indexOf(cat)]}</td>
            <td>${categoryAttendance[categoryArray.indexOf(cat)]} %</td>
        </tr>
      `;
    });
    past.innerHTML = tempInner;
  } else {
    categoryArray.forEach((cat) => {
      if (!isNaN(revenue[categoryArray.indexOf(cat)])) {
        tempInner += `
                <tr>
                    <td>${cat}</td>
                    <td>$ ${revenue[categoryArray.indexOf(cat)]}</td>
                    <td>${categoryAttendance[categoryArray.indexOf(cat)]} %</td>
                </tr>
              `;
      }
    });
    upcoming.innerHTML = tempInner;
  }
}

async function start() {
  dataEvent = await cargarData().then((res) => {
    currentDate = res.currentDate;
    dataEvent = res.events;
    dataEvent = setArray(dataEvent, "");
    pastEvents = setArray(dataEvent, "past");
    upcomingEvents = setArray(dataEvent, "upcoming");
    console.log(upcomingEvents);
    setFirstTable();
    setRevenuesTable(pastEvents, "assistance");
    setRevenuesTable(upcomingEvents, "estimate");
    checkApi();
  });
}

start();
