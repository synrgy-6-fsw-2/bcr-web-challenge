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

// // Fungsi untuk menampilkan mobil pada tabel
function displayCars(cars) {
  const tableBody = document.getElementById("table-body-list-cars");
  tableBody.innerHTML = "";

  // // Menambahkan setiap mobil ke dalam tabel
  cars.forEach((car) => {
    const row = tableBody.insertRow();
    row.innerHTML = `
      <td>${car.plate}</td>
      <td>${car.manufacture}</td>
      <td>${car.model}</td>
      <td>${car.type}</td>
      <td>${car.transmission}</td>
      <td>${car.year}</td>
      <td>${car.available ? "Yes" : "No"}</td>
    `;
  });
}

function filterCarsByAvailability(availability) {
  if (availability === "all") {
    return carInventory;
  }
  return carInventory.filter(
    (car) => car.available === (availability === "available")
  );
}

function filterCarsByManufacture(manufacture) {
  if (manufacture === "all") {
    return carInventory;
  }
  return carInventory.filter((car) => car.manufacture === manufacture);
}

function filterCarsByYear(year) {
  if (year === "all") {
    return carInventory;
  }
  return carInventory.filter((car) => car.year === parseInt(year));
}

function filterCarsByTransmission(transmission) {
  if (transmission === "all") {
    return carInventory;
  }
  return carInventory.filter((car) => car.transmission === transmission);
}

function searchByManufacture(event) {
  event.preventDefault();
  const manufacture = event.target.manufacture.value;
  const filteredCars = filterCarsByManufacture(manufacture);
  displayCars(filteredCars);
}

function updateAvailabilityFilter(event) {
  const availability = event.target.value;
  const filteredCars = filterCarsByAvailability(availability);
  displayCars(filteredCars);
}

function updateManufactureFilter(event) {
  const manufacture = event.target.value;
  const filteredCars = filterCarsByManufacture(manufacture);
  displayCars(filteredCars);
}

function updateYearFilter(event) {
  const year = event.target.value;
  const filteredCars = filterCarsByYear(year);
  displayCars(filteredCars);
}

function updateTransmissionFilter(event) {
  const transmission = event.target.value;
  const filteredCars = filterCarsByTransmission(transmission);
  displayCars(filteredCars);
}

// // Event listener untuk tombol pencarian berdasarkan manufaktur
document
  .getElementById("form-search-car-manufacture")
  .addEventListener("submit", searchByManufacture);

// // Event listener untuk filter ketersediaan
document
  .getElementById("filterAvailability")
  .addEventListener("change", updateAvailabilityFilter);
document
  .getElementById("filterManufacture")
  .addEventListener("change", updateManufactureFilter);
document
  .getElementById("filterYear")
  .addEventListener("change", updateYearFilter);
document
  .getElementById("filterTransmission")
  .addEventListener("change", updateTransmissionFilter);

// Memanggil fungsi untuk menampilkan mobil pada load pertama halaman
displayCars(carInventory);
