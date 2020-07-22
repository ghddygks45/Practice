const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings');

const USER_LS = 'curruntUser',
    SHOWING_ON = 'showing'

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    painGreeting(currentValue);
    saveName(currentValue);
}

function saveName(text){
    localStorage.setItem(USER_LS, text); // setItem(키,벨류) 저장한다.
}

function askForName(){
    form.classList.add(SHOWING_ON);
    form.addEventListener('submit',handleSubmit)
}

function painGreeting(text){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`
}

function loadNmae(){
    const currentUser = localStorage.getItem(USER_LS); // localStorage 키값 불러오기
    if(currentUser === null){ // localStorage가 저장되있지 않으면
        askForName();
    } else{ // localStorage가 저장되어 있으면
        painGreeting(currentUser);
    }
}

function init(){
    loadNmae();
}init()


// const form = document.querySelector('.js-form'),
//     input = form.querySelector('input'),
//     greeting = document.querySelector('.js-greetings');

//     const USER_LS = 'currentUser';


// function loadName(){
//     const currnetUser = localStorage.getItem(USER_LS) // 키 값 불러오기
//     if(currnetUser === null){ // 현재 사용자가 정해지지 않았을 때,
//         askForName();
//     } else{ // 사용자가 정해졌을 때,
//         // h4 가 등장해야함.
//         saveNameShow(currnetUser);
//     }
// }

// function init(){
//     loadName();
// }
// init();

// function saveNameShow(name){
//     greeting.classList.remove('greetings');
//     greeting.textContent = `Hello ${name}`
// }

// function askForName(){
//     form.classList.remove('form');
//     form.addEventListener('submit',handleSubmit);
// }
// function saveName(name){
//     localStorage.setItem(USER_LS, name) // 키, 벨류 저장
// }

// function handleSubmit(e){
//     e.preventDefault();
//     const text = input.value;
//     saveName(text);
//     showName(text);
//     greeting.classList.remove('greetings');
// }
// function showName(name){
//     greeting.textContent = `Hello ${name}`
//     form.classList.add('form');
// }
