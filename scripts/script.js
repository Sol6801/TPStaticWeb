const button = document.querySelector('.burger') 
const nav = document.querySelector('.nav')
const burger = document.querySelector('#burger')

button.addEventListener('click', () =>{
    nav.classList.toggle('active')
})
burger.addEventListener('click', () =>{
    burger.classList.toggle('bars')
})


// const closure = () =>{
//     if (burger.classList.contains('bars')){
//         burger.classList.remove('bars')
//     }else{
//     burger.classList.toggle('bars')
//     }
//     }
// }
// button.addEventListener('click', (closure) =>{
//     burger.classList.add('bars')
// })


