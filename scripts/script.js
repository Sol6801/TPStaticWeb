const button = document.querySelector('.burger') 
const nav = document.querySelector('.nav')
const burger = document.querySelector('#burger')
const province = document.querySelectorAll('path')
const art = document.querySelectorAll('.info-card')
const cards = document.querySelectorAll('.card')
const closes = document.querySelectorAll('.close')
const map = document.querySelector('.map')
const text = document.querySelector('.container')

button.addEventListener('click', () =>{
    nav.classList.toggle('active')
})
burger.addEventListener('click', () =>{
    burger.classList.toggle('active')
})

province.forEach((path) => {
path.addEventListener('click', () =>{
    map.classList.add('noclick');
    art.forEach((article) => {
        
        if (article.classList.contains(path.id)){
            article.classList.add('card');
            article.classList.add('activate');   
        }
        closes.forEach((close) => {
            close.addEventListener('click', () =>{
                article.classList.remove('activate')
                article.classList.remove('card');
                map.classList.remove('noclick');

            })
        })
    })
})
})