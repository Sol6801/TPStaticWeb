const places = document.querySelectorAll('path')
const goPassport = document.querySelector('.back')

list = JSON.parse(localStorage.getItem("provinces"));

list.forEach((item) => {
    province.forEach((path) => {
        if (path.id === (item)){
        path.style.fill = "#885e8b";
        }
    })
    console.log(item)
})


goPassport.addEventListener('click',() =>{
    window.document.location = 'passport.html'})