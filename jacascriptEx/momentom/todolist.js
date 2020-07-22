const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input');
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';



let toDos = [];

function deleteToDo(evnet){
    // html요소 삭제
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    // 배열요소 삭제
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); // 반환되는 값
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // 제이슨문법 string으로 바꿔줌
}

function paintToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    delBtn.textContent = 'x';
    delBtn.addEventListener('click',deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.id = newId;
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(evnet){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';
    
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const paredToDos = JSON.parse(loadedToDos);  // 제이슨문법 배열로 바꿔줌
        paredToDos.forEach(function(toDo){
            paintToDo(toDo.text)
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener('submit',handleSubmit);
}
init();