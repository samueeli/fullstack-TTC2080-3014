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
const searchInput = document.getElementById('searchInput');
const searchResults = document.querySelector('.searchResults');
const searchArea = document.getElementById('searchArea');

const searchItems = searchResults.children;
let currentItem = -1;

// The reason you can't do it like this (returning a string) is that it will still essentially be
// a string that can't have the "add" DOM method. You need to actually create the dom elements.
// const SearchItem = (name) => {
//   return `<li class="searchItem">${name}</li>`;
// };

const SearchItem = (name) => {
  let item = document.createElement('li');
  item.classList.add('searchItem');
  item.innerText = name;
  searchResults.appendChild(item);
};

const getNames = () => {
  return fetch('names.json')
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log('Request (fetch names) failed', err));
};

const updateSearch = async () => {
  searchResults.innerHTML = '';
  const names = await getNames();
  const currentSearchValue = searchInput.value.toLowerCase();
  const filteredNames =
    currentSearchValue !== ''
      ? names.filter((name) =>
          name.toLowerCase().startsWith(currentSearchValue)
        )
      : [];

  filteredNames.map((name) => {
    SearchItem(name);
  });

  currentSearchValue === '' && (currentItem = -1);
};

const selectItem = (e) => {
  searchInput.value = e.target.innerText;
  searchResults.innerHTML = '';
  currentItem = -1;
};

searchResults.addEventListener('click', (e) => selectItem(e));

const handleKeydown = (e) => {
  const currentSearchValue = searchInput.value;
  if (currentSearchValue.length > 0) {
    switch (e.keyCode) {
      case 38: // up arrow
        if (searchItems.length > 0) {
          currentItem > -1 &&
            searchItems[currentItem].classList.remove('selected');
          currentItem = currentItem > 0 ? --currentItem : 0;
          searchItems[currentItem].classList.add('selected');
        }
        break;
      case 40: // down arrow
        if (searchItems.length > 0) {
          currentItem > -1 &&
            searchItems[currentItem].classList.remove('selected');
          currentItem =
            currentItem < searchItems.length - 1
              ? ++currentItem
              : searchItems.length - 1;
          searchItems[currentItem].classList.add('selected');
        }
        break;
      case 13: // enter
        if (searchItems.item(currentItem)) {
          searchInput.value = searchItems.item(currentItem).innerText;
          searchResults.innerHTML = '';
        } else {
          searchInput.value = '';
          searchResults.innerHTML = '';
        }
    }
  }
};

searchArea.addEventListener('keydown', handleKeydown);
