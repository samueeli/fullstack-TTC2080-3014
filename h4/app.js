const apartmentList = document.getElementById('apCardList');

//T1-T2
const ApartmentCard = (imgURL, imgAlt, address, sqft, description, price) => {
  return `
      <div class="apCardContainer">
        <div class="apImageBox">
          <img
            src="${imgURL}"
            alt="${imgAlt}"
          />
        </div>
        <div class="apInfoBox">
          <h4>${address}</h4>
          <p>${sqft} m2</p>
          <p>
            ${description}
          </p>
          <p>${price} euroa</p>
        </div>
      </div>
    `;
};

const getHouses = () => {
  return fetch('houses.json')
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log('Request (fetch houses) failed', err));
};

const filterHouses = (houses) => {
  let result = houses;
  const filterBySqft = document.getElementById('filterBySqft').checked;
  const filterByPrice = document.getElementById('filterByPrice').checked;
  const apCount = document.getElementById('apCount');

  filterBySqft && (result = result.filter((house) => house.sqft < 200));
  filterByPrice && (result = result.filter((house) => house.price < 1000000));

  apCount.innerHTML = `Löytyi <b>${result.length}</b> asuntoa`;

  return result;
};

const renderHouses = async () => {
  let houses = await getHouses();
  let filteredHouses = filterHouses(houses);

  filteredHouses
    ? (apartmentList.innerHTML = filteredHouses
        .map((house, index) => {
          return ApartmentCard(
            house.img,
            'house image' + index + 1,
            house.address,
            house.sqft,
            house.description,
            house.price.toLocaleString().replace(/,/g, ' ')
          );
        })
        .join(''))
    : (apartmentList.innerHTML = '<h3>Asuntoja tulossa...</h3>');
};

const init = () => {
  renderHouses();
};

//T3
