let addButton = document.querySelector('#addButton');
let parentElement = document.querySelector('.parentElement');
let add = document.querySelector('.add');
let edit = document.querySelector('.edit');
edit.style.display = 'none';

addButton.addEventListener('click', () => {
    let text = document.querySelector('#todoText');
    if(text.value.trim()){
        createTodo(parentElement, text.value);
        text.value = '';
    }
});

function createTodo(parent, text){
    let newDiv = document.createElement('div');
    newDiv.className = 'newTodo';
    let newText = document.createElement('p');
    newText.innerText = text;
    let buttonsParent = document.createElement('div');
    buttonsParent.className = 'buttonsParent';
    let removeButton = document.createElement('button');
    let editButton = document.createElement('button');
    editButton.innerHTML = '&#x270D;';
    removeButton.innerHTML = '&#x2715;';
    buttonsParent.append(removeButton, editButton);
    newDiv.append(newText, buttonsParent);
    parent.appendChild(newDiv);
    removeButton.addEventListener('click', () => parent.removeChild(newDiv));
    editButton.addEventListener('click', () => editTodo(newText));
}

function editTodo(todo){
    edit.style.display = 'flex';
    add.style.display = 'none';
    let editInput = document.querySelector('.changeText');
    let editButton = document.querySelector('#editButton');
    editInput.value = todo.innerText;
    editButton.addEventListener('click', () =>{
        if(editInput.value.trim()){
            todo.innerText = editInput.value;
            edit.style.display = 'none';
            add.style.display = 'flex';
        }
    })

}