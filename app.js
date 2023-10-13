const carInventory = [
  {
    id: "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    plate: "DBH-3491",
    transmission: "Automatic",
    manufacture: "Ford",
    model: "F150",
    available: true,
    type: "Sedan",
    year: 2022,
    options: [
      "Cruise Control",
      "Tinted Glass",
      "Tinted Glass",
      "Tinted Glass",
      "AM/FM Stereo",
    ],
    specs: [
      "Brake assist",
      "Leather-wrapped shift knob",
      "Glove box lamp",
      "Air conditioning w/in-cabin microfilter",
      "Body color folding remote-controlled pwr mirrors",
      "Dual-stage front airbags w/occupant classification system",
    ],
  },
  {
    id: "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
    plate: "WXB-3984",
    transmission: "Automatic",
    manufacture: "BMW",
    model: "X5",
    available: false,
    type: "Convertible",
    year: 2019,
    options: [
      "Keyless Entry",
      "Power Windows",
      "MP3 (Single Disc)",
      "CD (Multi Disc)",
      "Navigation",
    ],
    specs: [
      "Rear passenger map pockets",
      "Electrochromic rearview mirror",
      "Dual chrome exhaust tips",
      "Locking glove box",
      "Pwr front vented disc/rear drum brakes",
    ],
  },
  {
    id: "bf6b5c43-1377-4ae0-8908-310c64266f81",
    plate: "OSL-4224",
    transmission: "Automanual",
    manufacture: "Lincoln",
    model: "MKZ",
    available: true,
    type: "Sedan",
    year: 2021,
    options: [
      "Bucket Seats",
      "Airbag: Passenger",
      "Airbag: Driver",
      "Power Seats",
      "Airbag: Side",
      "Antilock Brakes",
      "CD (Multi Disc)",
    ],
    specs: [
      "Driver & front passenger map pockets",
      "Direct-type tire pressure monitor system",
      "Cargo area lamp",
      "Glove box lamp",
      "Silver finish interior door handles",
      "Driver & front passenger advanced multistage airbags w/occupant sensors",
      "Silver accent IP trim finisher -inc: silver shifter finisher",
      "Fasten seat belt warning light/chime",
    ],
  },
];

function initializeTable() {
  const tableBody = document.getElementById("table-body-list-cars");
  tableBody.innerHTML = "";

  carInventory.forEach((car) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${car.plate}</td>
      <td>${car.manufacture}</td>
      <td>${car.model}</td>
      <td>${car.type}</td>
      <td>${car.transmission}</td>
      <td>${car.year}</td>
      <td>${car.available ? "Available" : "Rented"}</td>
    `;
    tableBody.appendChild(row);
  });
}

function searchByManufacture(manufacture) {
  const filteredCars = carInventory.filter(
    (car) => car.manufacture.toLowerCase() === manufacture.toLowerCase()
  );
  updateTable(filteredCars);
}

function filterByAvailability(availability) {
  if (availability === "all") {
    updateTable(carInventory);
  } else if (availability === "available") {
    const filteredCars = carInventory.filter((car) => car.available === true);
    updateTable(filteredCars);
  } else if (availability === "rented") {
    const filteredCars = carInventory.filter((car) => car.available === false);
    updateTable(filteredCars);
  }
}

function filterByYear(year) {
  if (year === "all") {
    updateTable(carInventory);
  } else {
    const filteredCars = carInventory.filter(
      (car) => car.year === parseInt(year)
    );
    updateTable(filteredCars);
  }
}

function filterByManufacture(manufacture) {
  if (manufacture === "all") {
    updateTable(carInventory);
  } else {
    const filteredCars = carInventory.filter(
      (car) => car.manufacture.toLowerCase() === manufacture.toLowerCase()
    );
    updateTable(filteredCars);
  }
}

function filterByTransmission(transmission) {
  if (transmission === "all") {
    updateTable(carInventory);
  } else {
    const filteredCars = carInventory.filter(
      (car) => car.transmission.toLowerCase() === transmission.toLowerCase()
    );
    updateTable(filteredCars);
  }
}

function updateTable(filteredCars) {
  const tableBody = document.getElementById("table-body-list-cars");
  tableBody.innerHTML = "";

  filteredCars.forEach((car) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${car.plate}</td>
      <td>${car.manufacture}</td>
      <td>${car.model}</td>
      <td>${car.type}</td>
      <td>${car.transmission}</td>
      <td>${car.year}</td>
      <td>${car.available ? "Available" : "Rented"}</td>
    `;
    tableBody.appendChild(row);
  });
}

const searchForm = document.getElementById("form-search-car-manufacture");
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const manufactureInput = document.querySelector('[name="manufacture"]').value;
  searchByManufacture(manufactureInput);
});

const availabilitySelect = document.getElementById("filterAvailability");
availabilitySelect.addEventListener("change", function () {
  const availabilityValue = availabilitySelect.value;
  filterByAvailability(availabilityValue);
});

const yearSelect = document.getElementById("filterYear");
const uniqueYear = [...new Set(carInventory.map((car) => car.year))];

uniqueYear.forEach((year) => {
  const option = document.createElement("option");
  option.value = year;
  option.text = year;
  yearSelect.add(option);
});

yearSelect.addEventListener("change", function () {
  const yearValue = yearSelect.value;
  filterByYear(yearValue);
});

const manufactureSelect = document.getElementById("filterManufacture");
const uniqueManufactures = [
  ...new Set(carInventory.map((car) => car.manufacture)),
];

uniqueManufactures.forEach((manufacture) => {
  const option = document.createElement("option");
  option.value = manufacture;
  option.text = manufacture;
  manufactureSelect.add(option);
});

manufactureSelect.addEventListener("change", function () {
  const manufactureValue = manufactureSelect.value;
  filterByManufacture(manufactureValue);
});

const transmissionSelect = document.getElementById("filterTransmission");
const uniqueTransmission = [
  ...new Set(carInventory.map((car) => car.transmission)),
];

uniqueTransmission.forEach((transmission) => {
  const option = document.createElement("option");
  option.value = transmission;
  option.text = transmission;
  transmissionSelect.add(option);
});

transmissionSelect.addEventListener("change", function () {
  const transmissionValue = transmissionSelect.value;
  filterByTransmission(transmissionValue);
});

initializeTable();
