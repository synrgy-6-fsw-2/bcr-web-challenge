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

// Global Variables
var filteredCars = carInventory;

const listCarSection = document.querySelector("#table-body-list-cars");

const searchInput = document.querySelector('#input-manufacture');
const filterAvailability = document.querySelector('#filterAvailability');
const filterManufacture = document.querySelector('#filterManufacture');
const filterTransmission = document.querySelector('#filterTransmission');
const filterYear = document.querySelector('#filterYear');

// Render Function
const renderCars = (filteredCars) => {
  filteredCars.forEach(car => {

    // Create a new table row
    const tr = document.createElement('tr');

    // Create table data for each property and append it to the table row
    const tdPlate = document.createElement('td');
    tdPlate.textContent = car.plate;
    tr.appendChild(tdPlate);

    const tdManufacture = document.createElement('td');
    tdManufacture.textContent = car.manufacture;
    tr.appendChild(tdManufacture);

    const tdModel = document.createElement('td');
    tdModel.textContent = car.model;
    tr.appendChild(tdModel);

    const tdType = document.createElement('td');
    tdType.textContent = car.type;
    tr.appendChild(tdType);

    const tdTransmission = document.createElement('td');
    tdTransmission.textContent = car.transmission;
    tr.appendChild(tdTransmission);

    const tdYear = document.createElement('td');
    tdYear.textContent = car.year;
    tr.appendChild(tdYear);

    const tdAvailable = document.createElement('td');
    tdAvailable.textContent = car.available ? 'Yes' : 'No';
    tr.appendChild(tdAvailable);

    listCarSection.appendChild(tr);
  });
}

// Initial Render
renderCars(filteredCars);

// Iterate filter
const refreshFilteredCars = () => {
  const filteredByAvailability = filterAvailability.value !== 'all';
  const filteredByManufacture = filterManufacture.value !== 'all';
  const filteredByTransmission = filterTransmission.value !== 'all';
  const filteredByYear = filterYear.value !== 'all';

  if (filteredByAvailability) {
    filteredCars = carInventory.filter(car => car.available.toString() == (filterAvailability.value));
  }
  if (filteredByManufacture) {
    filteredCars = filteredCars.filter(car => car.manufacture.toLowerCase() == filterManufacture.value);
  }
  if (filteredByTransmission) {
    filteredCars = filteredCars.filter(car => car.transmission.toLowerCase() == filterTransmission.value);
  }
  if (filteredByYear) {
    filteredCars = filteredCars.filter(car => car.year.toString() == filterYear.value);
  }
  if (!filteredByAvailability && !filteredByManufacture && !filteredByTransmission && !filteredByYear) {
    filteredCars = carInventory;
  }
}

// Event Listeners
searchInput.addEventListener('input', (event) => {
  const searchValue = event.target.value.toLowerCase();
  filteredCars = carInventory.filter(car => car.manufacture.toLowerCase().includes(searchValue));
  listCarSection.innerHTML = '';
  renderCars(filteredCars);
});

filterAvailability.addEventListener('change', (event) => {
  listCarSection.innerHTML = '';
  refreshFilteredCars();
  renderCars(filteredCars);
});

filterManufacture.addEventListener('change', (event) => {
  listCarSection.innerHTML = '';
  refreshFilteredCars();
  renderCars(filteredCars);
});

filterTransmission.addEventListener('change', (event) => {
  listCarSection.innerHTML = '';
  refreshFilteredCars();
  renderCars(filteredCars);
});

