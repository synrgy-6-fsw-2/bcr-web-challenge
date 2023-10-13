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
const inputManufacture = document.querySelector('input[name="manufacture"]');
const searchManufactureButton = document.getElementById('button-addon2');
const tableListCar = document.getElementById('table-body-list-cars');
const filterAvailability = document.getElementById('filterAvailability');
const filterManufacture = document.getElementById('filterManufacture');
const filterTransmission = document.getElementById('filterTransmission');
const filterYear = document.getElementById('filterYear');

displayCars(carInventory);

// Search berdasarkan manufacture
function searchCarBasedManufacture() {
  const searchInput = inputManufacture.value.toLowerCase();
  const searchManufacture = carInventory.filter((car) =>
    car.manufacture.toLowerCase().includes(searchInput)
  );
  displayCars(searchManufacture);
}

// Filter berdasarkan availability
function filterCarAvailability(){
  const availability = filterAvailability.value;
  const filteredAvailabilityCars = carInventory.filter((car) => {
    if (availability === 'all') {
      return true;
    } else if (availability === 'available') {
      return car.available;
    } else if (availability === 'rented') {
      return !car.available;
    }
  });
  displayCars(filteredAvailabilityCars);
}

// Filter berdasarkan manufactur
function filterCarManufactur(){
  const manufacture = filterManufacture.value;
  const filterManufactureCars = carInventory.filter(
    (car)=>{
      if(manufacture === 'all'){
        return true;
      }
        return car.manufacture.toLowerCase() === manufacture.toLowerCase()
    }
  )
  displayCars(filterManufactureCars);
}

// Filter berdasarkan transmission
function filterCarTransmission(){
  const transmission = filterTransmission.value;
  const filterTransmissionCars = carInventory.filter(
    (car)=>{
      if(transmission === 'all'){
        return true;
      }
      return car.transmission.toLowerCase() === transmission.toLowerCase()
    }
  )
  displayCars(filterTransmissionCars);
}

// Filter berdasarkan tahun
function filterCarYear(){
  const year = filterYear.value;
  const filterYearCars = carInventory.filter(
    (car)=>{
      if(year === 'all'){
        return true
      }
      return car.year=== parseInt(year)
    }
  )
  displayCars(filterYearCars);
}

function displayCars(carInventory){
  tableListCar.innerHTML='';

   for(let i=0;i<carInventory.length;i++){
    const car = carInventory[i]
      const row = document.createElement('tr');
      row.innerHTML=`
      <td>${car.plate}</td>
      <td>${car.manufacture}</td>
      <td>${car.model}</td>
      <td>${car.type}</td>
      <td>${car.transmission}</td>
      <td>${car.year}</td>
      <td>${car.available ? 'available':'rented'}</td>
      `;
      tableListCar.appendChild(row)
   }
}

filterAvailability.addEventListener('change', filterCarAvailability);
filterManufacture.addEventListener('change', filterCarManufactur);
filterTransmission.addEventListener('change', filterCarTransmission);
filterYear.addEventListener('change', filterCarYear);
searchManufactureButton.addEventListener('click', searchCarBasedManufacture);