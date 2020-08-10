const leftli = document.querySelector('#leftli')
const midli = document.querySelector('#midli')
const rightli = document.querySelector('#rightli')

function navStorage() {
    if (localStorage.getItem('navActive')) {
        let navStored = localStorage.getItem('navActive');
        document.querySelector(`#${navStored}`).classList.add('active');
    }
    else (
        leftli.classList.add('active')
    )
}

function leftActive() {
    localStorage.setItem('navActive', 'leftli')
}

function midActive() {
    localStorage.setItem('navActive', 'midli')
}

function rightActive() {
    localStorage.setItem('navActive', 'rightli')
}

leftli.addEventListener('click', leftActive);
midli.addEventListener('click', midActive);
rightli.addEventListener('click', rightActive);

window.addEventListener('load', navStorage());