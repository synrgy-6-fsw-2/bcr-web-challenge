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

function displayAllCars(cars_) {
  cars_.forEach(json_data_set => {
    var tr = document.createElement("tr");

    const selectedProperties = [
      'plate',
      'manufacture',
      'model',
      'type',
      'transmission',
      'year',
      'available'];

      selectedProperties.forEach(propertyName => {
        var td = document.createElement("td");
        
        if (propertyName == 'available') {
          
          const specialElement = document.createElement("div");

          if (json_data_set[propertyName]) {
            specialElement.className = "available";
          } else {
            specialElement.className = "rented";
          }
          td.appendChild(specialElement);
        } else {
          td.innerText = json_data_set[propertyName];
        }
  
        tr.appendChild(td);
      });

    document.getElementById("table-body-list-cars").appendChild(tr);
  });
}

function clear(){
  var parentElement = document.getElementById("table-body-list-cars");

  if (parentElement) {
      while (parentElement.firstChild) {
          parentElement.removeChild(parentElement.firstChild);
      }
  }
}

function filterAvailableCars(carInventory_) {
  return carInventory_.filter(car => car.available == true);
}

function filterCarsByManufacture(inventory, manufacturer) {
  const filteredCars = inventory.filter(car => car.manufacture.toLowerCase() === manufacturer.toLowerCase());

  return filteredCars;
}


const form = document.getElementById('form-search-car-manufacture');
const input = document.querySelector('[name="manufacture"]');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputValue = input.value.toLowerCase();

  const filteredCars = carInventory.filter((car) =>
    car.manufacture.toLowerCase().includes(inputValue)
  );

  console.log(filteredCars)
  clear()
  displayAllCars(filteredCars);
});


console.log(filterAvailableCars(carInventory));
displayAllCars(carInventory);

document.getElementById("filterAvailability").addEventListener("change", function () {
  const selectedValue = this.value;
  
  if (selectedValue === "all") {
    clear()
    displayAllCars(carInventory);
  } else if (selectedValue === "available") {
    const availableCars = filterAvailableCars(carInventory);
    clear()
    displayAllCars(availableCars);
  } else if (selectedValue === "rented") {
    const rentedCars = filterRentedCars(carInventory);
    clear()
    displayAllCars(rentedCars);
  }
});

document.getElementById("filterManufacture").addEventListener("change", function () {
  const selectedValue = this.value;

  if (selectedValue === "all") {
    clear()
    displayAllCars(carInventory);
  } else if (selectedValue === "Ford") {
    const fordCars = filterCarsByManufacture(carInventory, selectedValue);
    clear()
    displayAllCars(fordCars);
  } else if (selectedValue === "BMW") {
    const bmwCars = filterCarsByManufacture(carInventory, selectedValue);
    clear()
    displayAllCars(bmwCars);
  } else if (selectedValue === "Lincoln") {
    const lincolnCars = filterCarsByManufacture(carInventory, selectedValue);
    clear()
    displayAllCars(lincolnCars);
  }
});

document.getElementById("filterManufacture").addEventListener("change", function () {
  const selectedValue = this.value;

  if (selectedValue === "all") {
    clear()
    displayAllCars(carInventory);
  } else if (selectedValue === "Ford") {
    const fordCars = filterCarsByManufacture(carInventory, selectedValue);
    clear()
    displayAllCars(fordCars);
  } else if (selectedValue === "BMW") {
    const bmwCars = filterCarsByManufacture(carInventory, selectedValue);
    clear()
    displayAllCars(bmwCars);
  } else if (selectedValue === "Lincoln") {
    const lincolnCars = filterCarsByManufacture(carInventory, selectedValue);
    clear()
    displayAllCars(lincolnCars);
  }
});
