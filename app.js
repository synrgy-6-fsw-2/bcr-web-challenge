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
    options: ["Keyless Entry", "Power Windows", "MP3 (Single Disc)", "CD (Multi Disc)", "Navigation"],
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

// Inisiasi element select yang diperlukan
const searchForm = document.getElementById("form-search-car-manufacture");
const tableBody = document.getElementById("table-body-list-cars");
const filterByAvailability = document.getElementById("filterAvailability");
const filterByYear = document.getElementById("filterYear");
const filterByManufacture = document.getElementById("filterManufacture");
const filterByTransmission = document.getElementById("filterTransmission");

// Event listener untuk mencari mobil berdasarkan manufacture
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Mendapat Input user
  const manufactureInput = searchForm.querySelector('input[name="manufacture"]').value.trim().toLowerCase();

  // Mencari berdasarkan manufaktur
  const filteredCars = carInventory.filter((car) => car.manufacture.toLowerCase().includes(manufactureInput));

  updateCarList(filteredCars);
});

// Event listener untuk filter berdasarkan ketersediaan mobil
filterByAvailability.addEventListener("change", function () {
  const selectedValue = filterByAvailability.value;

  // Mencari berdasarkan ketersediaan
  let filteredCars = [];
  if (selectedValue === "all") {
    filteredCars = carInventory; // "All" = semua mobil
  } else if (selectedValue === "available") {
    filteredCars = carInventory.filter((car) => car.available); // Menampilkan mobil yang tersedia
  } else if (selectedValue === "rented") {
    filteredCars = carInventory.filter((car) => !car.available); // Menampilkan mobil yang tidak tersedia
  }
  updateCarList(filteredCars);
});

// Event listener untuk filter berdasarkan tahun mobil
filterByYear.addEventListener("change", function () {
  const selectedYear = filterByYear.value;

  // Mencari berdasarkan tahun
  const filteredCars = carInventory.filter((car) => {
    if (selectedYear === "all") {
      // "All" = semua mobil
      return true;
    } else {
      return car.year === parseInt(selectedYear); // Menampilkan tahun mobil yang dicari
    }
  });

  updateCarList(filteredCars);
});

// Fungsi untuk mengisi tahun pada filter
function fillYearOptions() {
  const years = [...new Set(carInventory.map((car) => car.year))]; // Mendapatkan tahun mobil
  const selectYear = document.getElementById("filterYear");

  selectYear.innerHTML = '<option value="all">All</option>';

  years.forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    selectYear.appendChild(option);
  });
}

fillYearOptions();

// Event listener untuk filter berdasarkan manufaktur
filterByManufacture.addEventListener("change", function () {
  const selectedManufacture = filterByManufacture.value;

  // Mencari berdasarkan manufaktur
  const filteredCars = carInventory.filter((car) => {
    if (selectedManufacture === "all") {
      // "All" = semua mobil
      return true;
    } else {
      return car.manufacture === selectedManufacture; // Menampilkan manufaktur mobil yang dicari
    }
  });

  updateCarList(filteredCars);
});

// Fungsi untuk mengisi manufaktur pada filter
function fillManufactureOptions() {
  const manufactures = [...new Set(carInventory.map((car) => car.manufacture))]; // Mendapatkan manufaktur mobil
  const selectManufacture = document.getElementById("filterManufacture");

  selectManufacture.innerHTML = '<option value="all">All</option>';

  manufactures.forEach((manufacture) => {
    const option = document.createElement("option");
    option.value = manufacture;
    option.textContent = manufacture;
    selectManufacture.appendChild(option);
  });
}

fillManufactureOptions();

// Event listener untuk filter berdasarkan transmisi
filterByTransmission.addEventListener("change", function () {
  const selectedTransmission = filterByTransmission.value;

  // Mencari berdasarkan tranmisi
  const filteredCars = carInventory.filter((car) => {
    if (selectedTransmission === "all") {
      // "All" = semua mobil
      return true;
    } else {
      return car.transmission === selectedTransmission; // Menampilkan transmisi mobil yang dicari
    }
  });

  updateCarList(filteredCars);
});

// Fungsi untuk mengisi tranmisi pada filter
function fillTransmissionOptions() {
  const transmissions = [...new Set(carInventory.map((car) => car.transmission))]; // Mendapatkan tranmisi mobil
  const selectTransmission = document.getElementById("filterTransmission");

  selectTransmission.innerHTML = '<option value="all">All</option>';

  transmissions.forEach((transmission) => {
    const option = document.createElement("option");
    option.value = transmission;
    option.textContent = transmission;
    selectTransmission.appendChild(option);
  });
}

fillTransmissionOptions();

// Fungsi untuk update list mobil
function updateCarList(cars) {
  // Reset isi tabel
  tableBody.innerHTML = "";

  // Memperbarui tabel dengan hasil pencarian baru
  cars.forEach((car) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${car.plate}</td>
      <td>${car.manufacture}</td>
      <td>${car.model}</td>
      <td>${car.type}</td>
      <td>${car.transmission}</td>
      <td>${car.year}</td>
      <td>${car.available ? "Available" : "Not Available"}</td>
    `;
    tableBody.appendChild(row);
  });
}
