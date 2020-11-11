const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

loadEventListeners();
loadFromLocalStorage();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearAllTasks);
    filter.addEventListener('keyup', filterTasks);
}

function loadFromLocalStorage(){
    let tasks = localStorage.getItem('tasks');
    if( tasks !== null){
        tasks = JSON.parse(tasks);
        tasks.forEach(function(task){
            const li = document.createElement('li');
            li.className = "collection-item";
            const link = document.createElement('a');
            link.className = "delete-item secondary-content";
            link.innerHTML = "<i class='fa fa-remove'></i>";
            li.appendChild(document.createTextNode(task));
            li.appendChild(link);
            taskList.appendChild(li);
        })
    }
}

function addTask(e){
    if(taskInput.value.trim() === ""){
        alert('Please add a task');
    } else{
        const li = document.createElement('li');
        li.className = "collection-item";
        const link = document.createElement('a');
        link.className = "delete-item secondary-content";
        link.innerHTML = "<i class='fa fa-remove'></i>";
        li.appendChild(document.createTextNode(taskInput.value));
        let tasks;
        if(localStorage.getItem('tasks') === null){
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.push(taskInput.value);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value = '';
    }
    e.preventDefault();
}

function removeTask(e){
    const icon = e.target;
    const text = icon.parentElement.parentElement.innerText;
    if(icon.parentElement.className.includes('delete-item')){
        if(confirm("Are you sure?")){
            icon.parentElement.parentElement.remove();
        }
    }
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let index = tasks.indexOf(text);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearAllTasks(e){
    let allTasks = taskList.children;
    if(allTasks.length > 0){
        allTasks = Array.from(allTasks);
        allTasks.forEach(function(task){
            task.remove();
        })    
    }
    localStorage.removeItem('tasks');
    e.preventDefault();
}

function filterTasks(e){
    const text = filter.value.toLowerCase();
    let broh = taskList.children;
    broh = Array.from(broh)
    broh.forEach(function(each){
        if(each.textContent.toLowerCase().indexOf(text) != -1){
            each.style.display = 'block';
        } else {
            each.style.display = 'none'; 
        }
    })
}