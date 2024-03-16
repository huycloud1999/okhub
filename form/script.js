document.addEventListener("DOMContentLoaded", function () {
  var fatherElement = document.querySelector(".selectNationaly");
  var childElement = document.querySelector(".NationlityChild");
  fatherElement.addEventListener("click", function () {
    if (childElement.style.opacity === "1") {
      childElement.style.opacity = "0";
    } else {
      childElement.style.opacity = "1";
    }
  });
});
//
document.addEventListener("DOMContentLoaded", function () {
  var fatherElement2 = document.querySelector(".selectAirportArrival");
  var childElement2 = document.querySelector(".AirportArrivalChild");
  fatherElement2.addEventListener("click", function () {
    if (childElement2.style.opacity === "1") {
      childElement2.style.opacity = "0";
    } else {
      childElement2.style.opacity = "1";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var fatherElementR = document.querySelector(".selectreturnlDateFCT");
  var childElementR = document.querySelector(".returnlDateFCTChild");
  fatherElementR.addEventListener("click", function () {
    if (childElementR.style.opacity === "1") {
      console.log("nga ngu");
      childElementR.style.opacity = "0";
    } else {
      childElementR.style.opacity = "1";
      console.log(childElementR);
    }
  });
});

// calender Return date
const daysContainer = document.getElementById("daysContainerCDIReturn");
const prevBtn = document.getElementById("prevBtnCDIReturn");
const nextBtn = document.getElementById("nextBtnCDIReturn");
const monthYear = document.getElementById("monthYearCDIReturn");
const dateInput = document.getElementById("dateReturnPicker");
const calendar = document.getElementById("calendarDateReturn");
const dateInputValue = document.getElementById("dateInputValueReturn");
let currentDate = new Date();
let selectedDate = null;

function handleDayClick(day) {
  selectedDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    day
  );
  dateInputValue.innerHTML = selectedDate.toLocaleDateString("en-US");
  calendar.style.display = "none";
  dateInputValue.style.color = "black";
  renderCalendar();
}

function createDayElement(day) {
  const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
  const dayElement = document.createElement("div");
  dayElement.classList.add("dayCDIReturn");

  if (date.toDateString() === new Date().toDateString()) {
    dayElement.classList.add("current");
  }
  if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
    dayElement.classList.add("selected");
  }

  dayElement.textContent = day;
  dayElement.addEventListener("click", () => {
    handleDayClick(day);
  });
  daysContainer.appendChild(dayElement);
}

function renderCalendar() {
  daysContainer.innerHTML = "";
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  monthYear.textContent = `${currentDate.toLocaleString("default", {
    month: "long",
  })} ${currentDate.getFullYear()}`;

  for (let day = 1; day <= lastDay.getDate(); day++) {
    createDayElement(day);
  }
}

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

dateInput.addEventListener("click", () => {
  calendar.style.display = "block";
  positionCalendar();
});

document.addEventListener("click", (event) => {
  if (!dateInput.contains(event.target) && !calendar.contains(event.target)) {
    calendar.style.display = "none";
  }
});
function positionCalendar() {
  const inputRect = dateInput.getBoundingClientRect();
  calendar.style.top = 100 + "%";
  calendar.style.left = 0;
}

window.addEventListener("resize", positionCalendar);

renderCalendar();

//end return date
///date arrival
const daysContainerArrival = document.getElementById("daysContainerCDIArrival");
const prevBtnArrival = document.getElementById("prevBtnCDIArrival");
const nextBtnArrival = document.getElementById("nextBtnCDIArrival");
const monthYearArrival = document.getElementById("monthYearCDIArrival");
const dateInputArrival = document.getElementById("dateArrivalPicker");
const calendarArrival = document.getElementById("calendarDateArrival");
const dateInputValueArrival = document.getElementById("dateInputValueArrival");
let currentDateArrival = new Date();
let selectedDateArrival = null;

function handleDayClickArrival(day) {
  selectedDateArrival = new Date(
    currentDateArrival.getFullYear(),
    currentDateArrival.getMonth(),
    day
  );
  dateInputValueArrival.innerHTML =
    selectedDateArrival.toLocaleDateString("en-US");
  calendarArrival.style.display = "none";
  dateInputValueArrival.style.color = "black";
  renderCalendarArrival();
}

function createDayElementArrival(day) {
  const date = new Date(
    currentDateArrival.getFullYear(),
    currentDateArrival.getMonth(),
    day
  );
  const dayElement = document.createElement("div");
  dayElement.classList.add("dayCDIArrival");

  if (date.toDateString() === new Date().toDateString()) {
    dayElement.classList.add("current");
  }
  if (
    selectedDateArrival &&
    date.toDateString() === selectedDateArrival.toDateString()
  ) {
    dayElement.classList.add("selected");
  }

  dayElement.textContent = day;
  dayElement.addEventListener("click", () => {
    handleDayClickArrival(day);
  });
  daysContainerArrival.appendChild(dayElement);
}

function renderCalendarArrival() {
  daysContainerArrival.innerHTML = "";
  const firstDay = new Date(
    currentDateArrival.getFullYear(),
    currentDateArrival.getMonth(),
    1
  );
  const lastDay = new Date(
    currentDateArrival.getFullYear(),
    currentDateArrival.getMonth() + 1,
    0
  );

  monthYearArrival.textContent = `${currentDateArrival.toLocaleString(
    "default",
    {
      month: "long",
    }
  )} ${currentDateArrival.getFullYear()}`;

  for (let day = 1; day <= lastDay.getDate(); day++) {
    createDayElementArrival(day);
  }
}

prevBtnArrival.addEventListener("click", () => {
  currentDateArrival.setMonth(currentDateArrival.getMonth() - 1);
  renderCalendarArrival();
});

nextBtnArrival.addEventListener("click", () => {
  currentDateArrival.setMonth(currentDateArrival.getMonth() + 1);
  renderCalendarArrival();
});

dateInputArrival.addEventListener("click", () => {
  calendarArrival.style.display = "block";
  positionCalendarArrival();
});

document.addEventListener("click", (event) => {
  if (
    !dateInputArrival.contains(event.target) &&
    !calendarArrival.contains(event.target)
  ) {
    calendarArrival.style.display = "none";
  }
});
function positionCalendarArrival() {
  const inputRect = dateInput.getBoundingClientRect();
  calendar.style.top = 100 + "%";
  calendar.style.left = 0;
}

window.addEventListener("resize", positionCalendarArrival);

renderCalendarArrival();
