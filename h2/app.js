// T1
const result = document.getElementById('sumFormResult');

const laskeSumma = (n1, n2) => {
  return Number(n1) + Number(n2);
};

const tulostaSumma = (n1, n2) => {
  result.innerText = `Summa=${laskeSumma(n1, n2)}`;
};

// T4
const gaga = document.getElementById('gaga');

window.onload = () => {
  gaga.innerHTML = '<div>OMG - Lady Gaga start singing!</div>';
};

let fireworksCount = 0;

let fireworksInterval = setInterval(() => {
  gaga.innerHTML += '<div>NICE - fireworks!</div>';
  fireworksCount++;
  if (fireworksCount == 4) {
    clearInterval(fireworksInterval);
    setTimeout(
      () =>
        (gaga.innerHTML +=
          '<div>WOW - It was the best concert in my life...</div>'),
      3000
    );
  }
}, 5000);

// T5
function Person(name, age, phone, email) {
  this.name = name;
  this.age = age;
  this.phone = phone;
  this.email = email;

  this.upAge = function () {
    this.age++;
  };
}

const samuli = new Person('Samuli', 30, '112', 'samuli@samuli.com');
samuli.upAge();
console.log('samuli:', samuli); // age: 31

const liisa = new Person('Liisa', 22, '113', 'liisa@liisa.com');
console.log('liisa:', liisa);

const pekka = new Person('Pekka', 74, '114', 'pekka@pekka.com');
console.log('pekka:', pekka);

//T6
const kmPerHour = document.getElementById('kmPerHour');
const timePerKm = document.getElementById('timePerKm');

class Vauhtilaskin {
  constructor(h, min, sec, km) {
    this.h = h;
    this.min = min;
    this.sec = sec;
    this.km = km;
  }

  get kmhpace() {
    return this.calcKmhPace();
  }

  get minkmpace() {
    return this.calcMinkmPace();
  }

  calcKmhPace() {
    const time =
      parseInt(this.h) + (parseInt(this.min) * 60 + parseInt(this.sec)) / 3600;
    return (this.km / time).toFixed(2);
  }

  calcMinkmPace() {
    const sekunnit =
      parseInt(this.h) * 60 * 60 + parseInt(this.min) * 60 + parseInt(this.sec);
    let sekunnitPerKm = sekunnit / this.km;

    let minutes = 0;

    while (sekunnitPerKm >= 60) {
      minutes++;
      sekunnitPerKm = sekunnitPerKm - 60;
    }
    sekunnitPerKm = Math.round(sekunnitPerKm);
    sekunnitPerKm = String('0' + sekunnitPerKm).slice(-2);

    return `${minutes}:${sekunnitPerKm}`;
  }
}

document.getElementById('vauhtiForm').addEventListener('submit', (e) => {
  const h = document.getElementById('hours').value;
  const min = document.getElementById('min').value;
  const sec = document.getElementById('sec').value;
  const km = document.getElementById('km').value;

  const vauhti = new Vauhtilaskin(h, min, sec, km);

  kmPerHour.innerText = `${vauhti.kmhpace} km/h`;
  timePerKm.innerText = `${vauhti.minkmpace}/km`;

  e.preventDefault();
});
