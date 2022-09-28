//T1
const carouselOutput = document.getElementById('carouselOutput');

const images = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/818261/pexels-photo-818261.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

const setImage = () => {
  const checked = document.querySelector('input[name="img"]:checked').id;
  const selectedImage = images.find((img) => img.id == checked);
  carouselOutput.innerHTML = `<img src="${selectedImage.src}" alt="img${checked}" >`;
};

//T3
const pointsResult = document.getElementById('points');
const gradeResult = document.getElementById('grade');

const calculateGrade = () => {
  const t1 = Number(document.getElementById('t1').value);
  const t2 = Number(document.getElementById('t2').value);
  const t3 = Number(document.getElementById('t3').value);
  const t4 = Number(document.getElementById('t4').value);

  const validateValues = () => {
    let isValid = true;
    [t1, t2, t3, t4].forEach((val) => {
      (val < 0 || val > 6) && (isValid = false);
    });
    return isValid;
  };

  if (!validateValues()) {
    pointsResult.innerText = 'VIRHE!';
    gradeResult.innerText = 'VIRHE!';
    document.getElementById('error').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'none';

    const getGrade = () => {
      let result = 0;

      pointsSum > 21
        ? (result = 5)
        : pointsSum > 19
        ? (result = 4)
        : pointsSum > 17
        ? (result = 3)
        : pointsSum > 15
        ? (result = 2)
        : pointsSum > 12
        ? (result = 1)
        : (result = 0);

      return result;
    };

    const pointsSum = t1 + t2 + t3 + t4;
    const grade = getGrade();

    pointsResult.innerText = pointsSum;
    gradeResult.innerText = grade;
  }
};

//T4
const todoInput = document.getElementById('todoInput');
const todos = document.getElementById('todos');

const addTodo = () => {
  const todo = todoInput.value;

  todo.trim() !== '' &&
    (todos.innerHTML += `<li title="Poista klikkaamalla">${todo}</li>`);

  todoInput.value = '';
};

const removeAllTodos = () => {
  todos.innerHTML = '';
  todoInput.value = '';
};

//delete single todo
todos.addEventListener('click', (e) => {
  e.target.remove();
  e.preventDefault();
});

//T5
const color = document.getElementById('colorSelect');
const chosenColor = document.getElementById('chosenColor');
const tulosalue = document.getElementById('tulosalue');
const festInput = document.getElementById('festInput');
const chosenFest = document.getElementById('chosenFest');

const selectColor = () => {
  chosenColor.innerText = color.value;
};

const setColor = () => {
  tulosalue.style.backgroundColor = color.value;
};

const setFest = () => {
  chosenFest.innerText = festInput.value;
};

////////////////
//// WINDOW ////
////////////////
window.onload = () => {
  carouselOutput.innerHTML = `<img src="${images[0].src}" alt="img1" >`;
  chosenColor.innerText = color.value;
  tulosalue.style.backgroundColor = color.value;
};
