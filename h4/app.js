// http://netisto.fi/ttc2080-s2022/files/h4/

const apartmentList = document.getElementById('apCardList');

//t1
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

const renderHouses = async () => {
  let houses = await getHouses();

  apartmentList.innerHTML = houses
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
    .join('');
};

const init = () => {
  renderHouses();
};
