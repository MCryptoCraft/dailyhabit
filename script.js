function addtaskList() {
    const inputTask = document.getElementById('input').value;
    if (inputTask.trim() === "") {
        alert("Please enter some text!");
        return;
    }
    console.log(inputTask);
    const taskList = document.getElementById('taskList')
    const templateItem = document.getElementById('templateItem');
    const newItem = templateItem.cloneNode(true);
    newItem.removeAttribute('id');
    const newTask = newItem.querySelector('.task-text');
    newTask.textContent = inputTask;
    taskList.appendChild(newItem);
    document.getElementById('input').value = "";
}
function deletetaskList(button) {
    const taskItem = button.closest('li');
    taskItem.remove();
}
