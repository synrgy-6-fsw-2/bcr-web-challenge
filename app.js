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
    options: ["Cruise Control", "Tinted Glass", "Tinted Glass", "Tinted Glass", "AM/FM Stereo"],
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

const tableBody = document.getElementById("table-body-list-cars");

function initializeTable(cars) {
  tableBody.innerHTML = "";

  cars.forEach((car) => {
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
  return carInventory.filter((car) => car.manufacture.toLowerCase() === manufacture.toLowerCase());
}

function filterByAvailability(availability) {
  if (availability === "all") {
    return carInventory;
  }
  return carInventory.filter((car) => car.available === (availability === "available"));
}

function filterByYear(year) {
  if (year === "all") {
    return carInventory;
  }
  return carInventory.filter((car) => car.year === parseInt(year));
}

function filterByManufacture(manufacture) {
  if (manufacture === "all") {
    return carInventory;
  }
  return carInventory.filter((car) => car.manufacture.toLowerCase() === manufacture.toLowerCase());
}

function filterByTransmission(transmission) {
  if (transmission === "all") {
    return carInventory;
  }
  return carInventory.filter(
    (car) => car.transmission.toLowerCase() === transmission.toLowerCase()
  );
}

const searchForm = document.getElementById("form-search-car-manufacture");
const manufactureInput = document.querySelector('[name="manufacture"]');

const availabilitySelect = document.getElementById("filterAvailability");
const yearSelect = document.getElementById("filterYear");
const manufactureSelect = document.getElementById("filterManufacture");
const transmissionSelect = document.getElementById("filterTransmission");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let keyword = manufactureInput.value;
  let result = searchByManufacture(keyword);

  initializeTable(result);
});

availabilitySelect.addEventListener("change", (e) => {
  const availabilityValue = e.target.value;
  let result = filterByAvailability(availabilityValue);

  initializeTable(result);
});

const uniqueYear = [...new Set(carInventory.map((car) => car.year))];
uniqueYear.forEach((year) => {
  const option = document.createElement("option");
  option.value = year;
  option.text = year;
  yearSelect.add(option);
});

yearSelect.addEventListener("change", (e) => {
  const yearValue = e.target.value;
  const result = filterByYear(yearValue);

  initializeTable(result);
});

const uniqueManufactures = [...new Set(carInventory.map((car) => car.manufacture))];
uniqueManufactures.forEach((manufacture) => {
  const option = document.createElement("option");
  option.value = manufacture;
  option.text = manufacture;
  manufactureSelect.add(option);
});

manufactureSelect.addEventListener("change", (e) => {
  const manufactureValue = e.target.value;
  const result = filterByManufacture(manufactureValue);

  initializeTable(result);
});

const uniqueTransmission = [...new Set(carInventory.map((car) => car.transmission))];
uniqueTransmission.forEach((transmission) => {
  const option = document.createElement("option");
  option.value = transmission;
  option.text = transmission;
  transmissionSelect.add(option);
});

transmissionSelect.addEventListener("change", (e) => {
  const transmissionValue = e.target.value;
  const result = filterByTransmission(transmissionValue);

  initializeTable(result);
});

initializeTable(carInventory);
