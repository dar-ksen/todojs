const main = ((document) => {
    const listItemTemplate = document.querySelector('.todo-item');
    const todoForm = document.querySelector('#todo-form');
    const addInput = document.querySelector('#add-input');
    const todoList = document.querySelector('#todo-list');
    const todoItems = document.querySelectorAll('.todo-item');
    
    const createTodoItem = function (title) {
        const listItem = listItemTemplate.cloneNode(true);
    
        listItem.querySelector('.title').innerText = title;
        bindEvents(listItem);
    
        return listItem;
    }
    
    const bindEvents = function (todoItem) {
        const checkbox = todoItem.querySelector('.checkbox');
        const editButton = todoItem.querySelector('.edit');
        const deleteButton = todoItem.querySelector('.delete');
    
        checkbox.addEventListener('change', toggleTodoItem);
        editButton.addEventListener('click', editTodoItem);
        deleteButton.addEventListener('click', deleteTodoItem);
    }
    
    const addTodoItem = function (evt) {
        evt.preventDefault();
        if (addInput.value === '') return alert('Необходимо ввести название задачи.');
    
        const todoItem = createTodoItem(addInput.value);
        todoList.appendChild(todoItem);
        addInput.value = '';
    }
    
    const toggleTodoItem = function ( ) {
        const listItem = this.parentNode;
        listItem.classList.toggle('completed');
    }
    
    const editTodoItem = function () {
        const listItem = this.parentNode;
        const title = listItem.querySelector('.title');
        const editInput = listItem.querySelector('.textfield');
        const isEditing = listItem.classList.contains('editing');
    
        if (isEditing) {
            title.innerText = editInput.value;
            this.innerText = 'Изменить';
        } else {
            editInput.value = title.innerText;
            this.innerText = 'Сохранить';
        }
    
        listItem.classList.toggle('editing');
        
    }
    const deleteTodoItem = function () {
      const listItem = this.parentNode;
      todoList.removeChild(listItem);
    }
    
    const main = function() {
       todoForm.addEventListener('submit', addTodoItem);
       todoItems.forEach((item) => bindEvents(item))
    }
    
    return main();

})(document);

main();