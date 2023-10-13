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


function carsDisplay(data){
  const tableData = document.getElementById('table-body-list-cars');
  tableData.innerHTML = '';


  data.forEach((car) => {
    const row = document.createElement('tr');
     row.innerHTML = `
      <td>${car.plate}</td>
      <td>${car.manufacture}</td>
      <td>${car.model}</td>
      <td>${car.type}</td>
      <td>${car.transmission}</td>
      <td>${car.year}</td>
      <td>${car.available ? '<span style="background-color: green; color: #ffff; padding-left:5%; padding-right:5%; padding-top:2%; padding-bottom:2%">Available</span>' : '<span style="background-color: red; color: #ffff; padding-left:5%; padding-right:5%; padding-top:2%; padding-bottom:2%">Rented</span>'}</td>
    `;

    tableData.appendChild(row);
  })
}

carsDisplay(carInventory);

const formSearch = document.getElementById('form-search-car-manufacture');
const inputSearch = formSearch.querySelector('input')

formSearch.addEventListener('submit', (e) =>{
  e.preventDefault();
  const nilaiSearch = inputSearch.value.toLowerCase();
  const carsFiltered = carInventory.filter((car) =>
   car.manufacture.toLowerCase().includes(nilaiSearch)
  );
 carsDisplay(carsFiltered);
});


//Availibity
const availibityCars = document.getElementById('filterAvailability');

availibityCars.addEventListener('change', function() {
  const selectAvailibity = availibityCars.value;

  const carsFilter = carInventory.filter(function(car){
    if (selectAvailibity === 'all'){
      return true;
    } else if (selectAvailibity === "available"){
      return car.available === true;
    } else if (selectAvailibity === "rented") {
      return car.available === false;
    }
  })

  carsDisplay(carsFilter);
})


//Manufacture
function filterByManufacture(manufacture) {
  const filteredCars = carInventory.filter((car) =>
    car.manufacture.toLowerCase() === manufacture.toLowerCase()
  );
  carsDisplay(filteredCars);
}

const filterManufacture = document.getElementById('filterManufacture');

filterManufacture.addEventListener('change', function() {
  const selectedManufacture = filterManufacture.options[filterManufacture.selectedIndex].text;

  if (selectedManufacture === 'Open this select menu') {
    carsDisplay(carInventory);
  } else {
    filterByManufacture(selectedManufacture);
  }
});


//Transmission
function filtersTransmissi(transmission) {
  const  filteredMobil= carInventory.filter((car) =>
    car.transmission.toLowerCase() === transmission.toLowerCase()
  );
  carsDisplay(filteredMobil);
}
const filterTransmi = document.getElementById('filterTransmission');
filterTransmi.addEventListener('change', function() {
  const pilihTransmi = filterTransmi.options[filterTransmi.selectedIndex].text;

  if (pilihTransmi=== 'Open this select menu') {
    carsDisplay(carInventory);
  } else {
    filtersTransmissi(pilihTransmi);
  }
});


//Year
// Fungsi untuk melakukan filter berdasarkan Year
function filterTahun(year) {
  const filteredMobil = carInventory.filter((car) => car.year === parseInt(year));
  carsDisplay(filteredMobil);
}

const filtersTahun = document.getElementById('filterYear');
filtersTahun.addEventListener('change', function() {
  const pilihTahun = filtersTahun.options[filtersTahun.selectedIndex].text;

  if (pilihTahun === 'Open this select menu') {
    carsDisplay(carInventory);
  } else {
    filterTahun(pilihTahun);
  }
});