// Form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  const email = this.email.value;
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    e.preventDefault();
  }
});

// To-Do List functionality
document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    li.onclick = function() { this.remove(); };
    document.getElementById('todoList').appendChild(li);
    input.value = '';
  }
}