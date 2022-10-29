let isEdit = false;
let currentTodo = null;

function init() {
  let infoText = document.getElementById('infoText');
  infoText.innerHTML = 'Loading Todos...';
  loadTodos();
}

async function loadTodos() {
  let response = await fetch('http://localhost:3000/todos');
  let todos = await response.json();
  showTodos(todos);
}

function createTodoListItem(todo) {
  // luodaan uusi LI-elementti
  let li = document.createElement('li');
  // luodaan uusi id-attribuutti
  let li_attr = document.createAttribute('id');
  // kiinnitetään tehtävän/todon id:n arvo luotuun attribuuttiin
  li_attr.value = todo._id;
  // kiinnitetään attribuutti LI-elementtiin
  li.setAttributeNode(li_attr);
  // luodaan uusi tekstisolmu, joka sisältää tehtävän/todon tekstin
  let text = document.createTextNode(todo.text);
  // lisätään teksti LI-elementtiin
  li.appendChild(text);
  // Add edit button
  let editField = document.createElement('span');
  let editField_attr = document.createAttribute('class');
  editField_attr.value = 'edit';
  editField.setAttributeNode(editField_attr);
  let ed = document.createTextNode('EDIT');
  editField.appendChild(ed);
  editField.onclick = function () {
    handleEdit(todo);
  };
  li.appendChild(editField);
  // luodaan uusi SPAN-elementti, käytännössä x-kirjan, jotta tehtävä saadaan poistettua
  let span = document.createElement('span');
  // luodaan uusi class-attribuutti
  let span_attr = document.createAttribute('class');
  // kiinnitetään attribuuttiin delete-arvo, ts. class="delete", jotta saadaan tyylit tähän kiinni
  span_attr.value = 'delete';
  // kiinnitetään SPAN-elementtiin yo. attribuutti
  span.setAttributeNode(span_attr);
  // luodaan tekstisolmu arvolla x
  let x = document.createTextNode('DELETE');
  // kiinnitetään x-tekstisolmu SPAN-elementtiin (näkyville)
  span.appendChild(x);
  // määritetään SPAN-elementin onclick-tapahtuma kutsumaan removeTodo-funkiota
  span.onclick = function () {
    removeTodo(todo._id);
  };
  // lisätään SPAN-elementti LI-elementtin
  li.appendChild(span);
  // palautetaan luotu LI-elementti
  // on siis muotoa: <li>Muista soittaa...<span class="remove">x</span></li>
  return li;
}

function showTodos(todos) {
  let todosList = document.getElementById('todosList');
  let infoText = document.getElementById('infoText');
  // no todos
  if (todos.length === 0) {
    infoText.innerHTML = 'No Todos';
  } else {
    todos.forEach((todo) => {
      let li = createTodoListItem(todo);
      todosList.appendChild(li);
    });
    infoText.innerHTML = '';
  }
}

async function handleSubmit() {
  !isEdit ? addTodo() : submitEditedTodo(currentTodo);
}

async function addTodo() {
  let newTodo = document.getElementById('newTodo');
  const data = { text: newTodo.value };
  if (data.text.trim() !== '') {
    const response = await fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    let todo = await response.json();
    let todosList = document.getElementById('todosList');
    let li = createTodoListItem(todo);
    todosList.appendChild(li);

    let infoText = document.getElementById('infoText');
    infoText.innerHTML = '';
    newTodo.value = '';
  } else {
    console.log('No text was given');
  }
}

async function submitEditedTodo(todo) {
  let todosList = document.getElementById('todosList');
  let saveButton = document.getElementById('button');
  let newTodo = document.getElementById('newTodo');
  const data = { text: newTodo.value };

  if (data.text.trim() !== '') {
    const res = await fetch('http://localhost:3000/todos/' + todo._id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    let resJson = await res.json(data);

    // Clear input
    newTodo.value = '';

    // Reset Button text to "Add a todo" and remove class
    saveButton.innerText = 'Add a todo';
    saveButton.classList.remove('save');

    // clear list
    todosList.innerHTML = '';

    // load todos
    loadTodos();
  } else {
    console.log('No text was given');
  }
}

async function removeTodo(id) {
  const response = await fetch('http://localhost:3000/todos/' + id, {
    method: 'DELETE',
  });
  let responseJson = await response.json();
  let li = document.getElementById(id);
  li.parentNode.removeChild(li);

  let todosList = document.getElementById('todosList');
  if (!todosList.hasChildNodes()) {
    let infoText = document.getElementById('infoText');
    infoText.innerHTML = 'No Todos';
  }
}

function handleEdit(todo) {
  let saveButton = document.getElementById('button');
  let input = document.getElementById('newTodo');

  // Add class "save" to button and edit innerHTML
  saveButton.classList.add('save');
  saveButton.innerText = 'Save Todo';

  // Add current Todo text to input
  input.value = todo.text;

  // setting current todo adn edit state
  isEdit = true;
  currentTodo = todo;
}
