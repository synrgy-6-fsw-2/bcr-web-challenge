const carInventory = [
  {
    id: '6e2bc663-5197-441a-957b-bc75e4a2da7c',
    plate: 'DBH-3491',
    transmission: 'Automatic',
    manufacture: 'Ford',
    model: 'F150',
    available: true,
    type: 'Sedan',
    year: 2022,
    options: [
      'Cruise Control',
      'Tinted Glass',
      'Tinted Glass',
      'Tinted Glass',
      'AM/FM Stereo',
    ],
    specs: [
      'Brake assist',
      'Leather-wrapped shift knob',
      'Glove box lamp',
      'Air conditioning w/in-cabin microfilter',
      'Body color folding remote-controlled pwr mirrors',
      'Dual-stage front airbags w/occupant classification system',
    ],
  },
  {
    id: '9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77',
    plate: 'WXB-3984',
    transmission: 'Automatic',
    manufacture: 'BMW',
    model: 'X5',
    available: false,
    type: 'Convertible',
    year: 2019,
    options: [
      'Keyless Entry',
      'Power Windows',
      'MP3 (Single Disc)',
      'CD (Multi Disc)',
      'Navigation',
    ],
    specs: [
      'Rear passenger map pockets',
      'Electrochromic rearview mirror',
      'Dual chrome exhaust tips',
      'Locking glove box',
      'Pwr front vented disc/rear drum brakes',
    ],
  },
  {
    id: 'bf6b5c43-1377-4ae0-8908-310c64266f81',
    plate: 'OSL-4224',
    transmission: 'Automanual',
    manufacture: 'Lincoln',
    model: 'MKZ',
    available: true,
    type: 'Sedan',
    year: 2021,
    options: [
      'Bucket Seats',
      'Airbag: Passenger',
      'Airbag: Driver',
      'Power Seats',
      'Airbag: Side',
      'Antilock Brakes',
      'CD (Multi Disc)',
    ],
    specs: [
      'Driver & front passenger map pockets',
      'Direct-type tire pressure monitor system',
      'Cargo area lamp',
      'Glove box lamp',
      'Silver finish interior door handles',
      'Driver & front passenger advanced multistage airbags w/occupant sensors',
      'Silver accent IP trim finisher -inc: silver shifter finisher',
      'Fasten seat belt warning light/chime',
    ],
  },
];
const filterAvailability = document.getElementById('filterAvailability');
const filterManufacture = document.getElementById('filterManufacture');
const filterTransmission = document.getElementById('filterTransmission');
const filterYear = document.getElementById('filterYear');
const tableBody = document.getElementById('table-body-list-cars');
const searchFormField = document.getElementById('form-search-car-manufacture')
const searchInput = document.querySelector('input[name="manufacture"]')

console.log(carInventory[0].manufacture);

function getUniqueValues(cars, key) {
  const uniqueValues = [];
  cars.forEach((car) => {
    if (!uniqueValues.includes(car[key])) {
      uniqueValues.push(car[key]);
    }
  });
  return uniqueValues;
}

function populateFilterOptions(filterElement, values) {
  filterElement.innerHTML = '<option value="all">All</option>';

  values.forEach((value) => {
    filterElement.innerHTML += `<option value="${value}">${value}</option>`;
  });
}

const filters = {
  manufacture: filterManufacture,
  transmission: filterTransmission,
  year: filterYear,
};

for (const filterKey in filters) {
  const uniqueValues = getUniqueValues(carInventory, filterKey);
  populateFilterOptions(filters[filterKey], uniqueValues);
}

function searchCar(e) {
  const valueSearch = searchInput.value.trim().toLowerCase();
  const filteredCars = carInventory.filter((car) => {
    return car.manufacture.toLowerCase().includes(valueSearch);
  });
  showListcar(filteredCars);
  searchInput.value = '';
  e.preventDefault()
}

function updateCarList() {
  const availabilityFilter = filterAvailability.value;
  const manufactureFilter = filterManufacture.value;
  const transmissionFilter = filterTransmission.value;
  const yearFilter = filterYear.value;

  const filteredCars = carInventory.filter((car) => {
    return (
      (availabilityFilter === 'all' || car.available === (availabilityFilter === 'available')) &&
      (manufactureFilter === 'all' || car.manufacture === manufactureFilter) &&
      (transmissionFilter === 'all' || car.transmission === transmissionFilter) &&
      (yearFilter === 'all' || car.year.toString() === yearFilter)
    );
  });

  console.log(manufactureFilter)
  showListcar(filteredCars);
}

function showListcar(car) {
  tableBody.innerHTML = '';

  for (let i = 0; i < car.length; i++) {
    const data = document.createElement('tr');
    data.innerHTML = `
    <td>${car[i].plate}</td>
      <td>${car[i].manufacture}</td>
      <td>${car[i].model}</td>
      <td>${car[i].type}</td>
      <td>${car[i].transmission}</td>
      <td>${car[i].year}</td>
      <td>${car[i].available ? 'Available' : 'Rented'}</td>
    `;
    tableBody.appendChild(data);
  }
}
filterAvailability.addEventListener('change', updateCarList);
filterManufacture.addEventListener('change', updateCarList);
filterTransmission.addEventListener('change', updateCarList);
filterYear.addEventListener('change', updateCarList);
searchFormField.addEventListener('submit', searchCar)

// Inisialisasi tampilan awal
updateCarList();
