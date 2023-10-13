document.addEventListener("DOMContentLoaded", function () {
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

  const filterAvailability = document.getElementById("filterAvailability");
  const filterManufacture = document.getElementById("filterManufacture");
  const filterTransmission = document.getElementById("filterTransmission");
  const filterYear = document.getElementById("filterYear");
  const searchForm = document.getElementById("form-search-car-manufacture");
  const tableBody = document.getElementById("table-body-list-cars");

  // Fungsi untuk merender daftar mobil
  function renderCarList(filteredCars) {
    tableBody.innerHTML = ""; // Kosongkan tabel

    filteredCars.forEach((car) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${car.plate}</td>
        <td>${car.manufacture}</td>
        <td>${car.model}</td>
        <td>${car.type}</td>
        <td>${car.transmission}</td>
        <td>${car.year}</td>
        <td>${car.available ? "Yes" : "No"}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  // Menambahkan event listener ke filter "Filter by Availability"
  filterAvailability.addEventListener("change", function () {
    const availability = filterAvailability.value;
    console.log(availability);

    if (availability === "all") {
      // Jika "All" dipilih, render semua mobil
      const filteredCars = carInventory;

      console.log(filteredCars);
      renderCarList(filteredCars);
    } else if (availability === "available") {
      // Jika status ketersediaan tertentu dipilih, filter mobil sesuai dengan status tersebut
      const filteredCars = carInventory.filter((car) => {
        return car.available === true;
      });

      console.log(filteredCars);

      renderCarList(filteredCars);
    } else if (availability === "rented") {
      const filteredCars = carInventory.filter((car) => {
        return car.available === false;
      });

      console.log(filteredCars);

      renderCarList(filteredCars);
    }
  });

  filterManufacture.addEventListener("change", function () {
    const manufacture = filterManufacture.value;
    console.log(manufacture);

    if (manufacture === "ford") {
      // Jika status ketersediaan tertentu dipilih, filter mobil sesuai dengan status tersebut
      const filteredCars = carInventory.filter((car) => {
        return car.manufacture === "Ford";
      });

      console.log(filteredCars);

      renderCarList(filteredCars);
    } else if (manufacture === "bmw") {
      const filteredCars = carInventory.filter((car) => {
        return car.manufacture === "BMW";
      });

      console.log(filteredCars);

      renderCarList(filteredCars);
    } else if (manufacture === "lincoln") {
      const filteredCars = carInventory.filter((car) => {
        return car.manufacture === "Lincoln";
      });

      console.log(filteredCars);

      renderCarList(filteredCars);
    }
  });

  filterTransmission.addEventListener("change", function () {
    const transmission = filterTransmission.value;
    console.log(transmission);

    if (transmission === "automatic") {
      // Jika status ketersediaan tertentu dipilih, filter mobil sesuai dengan status tersebut
      const filteredCars = carInventory.filter((car) => {
        return car.transmission === "Automatic";
      });

      console.log(filteredCars);

      renderCarList(filteredCars);
    } else if (transmission === "automanual") {
      const filteredCars = carInventory.filter((car) => {
        return car.transmission === "Automanual";
      });

      console.log(filteredCars);

      renderCarList(filteredCars);
    }
  });

  filterYear.addEventListener("change", function () {
    const year = filterYear.value;
    console.log(year);

    if (year === "2019") {
      // Jika status ketersediaan tertentu dipilih, filter mobil sesuai dengan status tersebut
      const filteredCars = carInventory.filter((car) => {
        return car.year === 2019;
      });

      console.log(filteredCars);

      renderCarList(filteredCars);
    } else if (year === "2021") {
      const filteredCars = carInventory.filter((car) => {
        return car.year === 2021;
      });

      console.log(filteredCars);

      renderCarList(filteredCars);
    } else if (year === "2022") {
      const filteredCars = carInventory.filter((car) => {
        return car.year === 2022;
      });

      console.log(filteredCars);

      renderCarList(filteredCars);
    }
  });

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchInput = searchForm.querySelector(
      'input[name="manufacture"]'
    ).value;
    const filteredCars = carInventory.filter((car) => {
      return car.manufacture.toLowerCase().includes(searchInput.toLowerCase());
    });

    renderCarList(filteredCars);
  });
  // Render daftar mobil saat halaman dimuat dengan filter "All"
  renderCarList(carInventory);
});
