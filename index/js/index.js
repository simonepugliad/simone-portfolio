const menu = document.querySelector('.nav-toggle')
const enlaces = document.querySelector('nav_link')

menu.addEventListener('click',() =>{
    document.body.classList.toggle('nav-open');
})

enlaces.forEach(link => {
    link.addEventListener('click',() => {
        document.body.classList.remove('nav-open')
    })
});