document.addEventListener('DOMContentLoaded', function () {
    const filterAvailability = document.getElementById('filterAvailability');
    const filterManufacture = document.getElementById('filterManufacture');
    const filterTransmission = document.getElementById('filterTransmission');
    const filterYear = document.getElementById('filterYear');
    const tableBodyListCars = document.getElementById('table-body-list-cars');
  
    function renderCarInventory(cars) {
      tableBodyListCars.innerHTML = '';
      cars.forEach((car) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${car.plate}</td>
          <td>${car.manufacture}</td>
          <td>${car.model}</td>
          <td>${car.type}</td>
          <td>${car.transmission}</td>
          <td>${car.year}</td>
          <td>${car.available ? 'Available' : 'Rented'}</td> 
        `;
        tableBodyListCars.appendChild(row);
      });
    }
  
    function filterCars() {
      const availabilityFilter = filterAvailability.value;
      const manufactureFilter = filterManufacture.value;
      const transmissionFilter = filterTransmission.value;
      const yearFilter = filterYear.value;
  
      const filteredCars = carInventory.filter((car) => {
        return (
          (availabilityFilter === 'all' || (availabilityFilter === 'available' && car.available) || (availabilityFilter === 'rented' && !car.available)) &&
          (manufactureFilter === 'all' || car.manufacture.toLowerCase() === manufactureFilter) &&
          (transmissionFilter === 'all' || car.transmission.toLowerCase() === transmissionFilter) &&
          (yearFilter === 'all' || car.year == yearFilter)
        );
      });
  
      renderCarInventory(filteredCars);
    }
  
    filterAvailability.addEventListener('change', filterCars);
    filterManufacture.addEventListener('change', filterCars);
    filterTransmission.addEventListener('change', filterCars);
    filterYear.addEventListener('change', filterCars);
  
    renderCarInventory(window.carInventory);
  });
  