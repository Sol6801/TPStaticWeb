const places = document.querySelectorAll('path')
const form = document.querySelector('form')
const goMap = document.getElementById('map')
const accepted = document.querySelector('#accepted')
const rejected = document.querySelector('#rejected')
const closing = document.querySelectorAll('.close')
const passports = document.querySelectorAll('passports')
const stamp = document.querySelector('#stamp')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let provinces = []
  document.querySelectorAll('[type="checkbox"]').forEach(item => {
    if (item.checked === true) {
        provinces.push(item.value);
    }
  })
  console.log(provinces)
  localStorage.setItem("provinces",JSON.stringify(provinces))


  if (provinces.length < 6){
    rejected.classList.add('grid-container')
  } else{
    accepted.classList.add('grid-container')
  }
      closing.forEach((close) => {
        
        close.addEventListener('click', () =>{
            if (rejected.classList.contains('grid-container')){
              rejected.classList.remove('grid-container')
          }          
            if (accepted.classList.contains('grid-container')){
              accepted.classList.remove('grid-container')
          }
        })
      })

})
  
goMap.addEventListener('click',() =>{
window.document.location = 'map.html'})