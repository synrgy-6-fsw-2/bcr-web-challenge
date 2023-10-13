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

function searchByManufactures(searhcItem) {
  return carInventory.filter((car) => 
    car.manufacture.toLowerCase().includes(searhcItem.toLowerCase())
  )
}

function filterByAvailability(availability) {
  if(availability === 'all'){
    return carInventory;
  }
  return carInventory.filter((car) => car.available === (availability === 'available') )
}

function filterByYears(year) {
  if(year === 'all'){
    return carInventory;
  }
  return carInventory.filter((car) => car.year === parseInt(year))
}

function filterByManufacture(manufacture) {
  if(manufacture === 'all'){
    return carInventory;
  }
  return carInventory.filter((car) => car.manufacture.toLowerCase() === manufacture.toLowerCase())
}

function filterByTransmition(transmision) {
  if(transmision === 'all'){
    return carInventory;
  }
  return carInventory.filter((car)=> car.transmission.toLowerCase() === transmision.toLowerCase())
}

// Setup DOM
const searchFormField = document.getElementById('form-search-car-manufacture')
const searchInput = document.querySelector('input[name="manufacture"]')

// filter DOM
const availabilityFilter = document.getElementById('filterAvailability')
const manufactureFilter = document.getElementById('filterManufacture')
const transmisionFilter = document.getElementById('filterTransmission')
const yearFilter = document.getElementById('filterYear')

const tableBody = document.getElementById('table-body-list-cars')

function renderCars(cars) {
  tableBody.innerHTML = ''
  cars.map((car)=>{
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${car.plate}</td>
      <td>${car.manufacture}</td>
      <td>${car.model}</td>
      <td>${car.type}</td>
      <td>${car.transmission}</td>
      <td>${car.year}</td>
      <td>${car.available ? 'Available' : 'Rented'}</td>
    `
    tableBody.appendChild(row)
  })
}

searchFormField.addEventListener('submit', (e) => {
  e.preventDefault()
  const searchValue = searchInput.value;
  const result = searchByManufactures(searchValue)
  // console.log(result)
  renderCars(result)
  searchInput.value = '';
})

availabilityFilter.addEventListener('change', () => {
  const availabilityValue = availabilityFilter.value;
  // console.log(availabilityValue)
  const result = filterByAvailability(availabilityValue)
  renderCars(result)
})

yearFilter.addEventListener('change', () => {
  const year = yearFilter.value;
  const result = filterByYears(year)
  renderCars(result)
})

manufactureFilter.addEventListener('change', () => {
  const manufactureValue = manufactureFilter.value;
  // console.log(manufactureValue)
  const result = filterByManufacture(manufactureValue)
  renderCars(result)
})

transmisionFilter.addEventListener('change', () => {
  const transmisionValue = transmisionFilter.value;
  const result = filterByTransmition(transmisionValue)
  renderCars(result)
})

renderCars(carInventory)