const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  taskList.appendChild(li);
  input.value = '';
});
