const places = document.querySelectorAll('path')
const form = document.querySelector('form')
const goMap = document.getElementById('map')
const accepted = document.querySelector('#accepted')
const rejected = document.querySelector('#rejected')
const closing = document.querySelectorAll('.close')
const passports = document.querySelectorAll('passports')

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
    rejected.classList.add('activate'); 
  } else{
    accepted.classList.add('grid-container')
    accepted.classList.add('activate')
  }
      closing.forEach((close) => {
        
        close.addEventListener('click', () =>{
            if (rejected.classList.contains('activate')){
              rejected.classList.remove('grid-container')
              rejected.classList.remove('activate'); 
          }          
            if (accepted.classList.contains('activate')){
              accepted.classList.remove('grid-container')
              accepted.classList.remove('activate'); 
          }
        })
      })

})
  
goMap.addEventListener('click',() =>{
window.document.location = 'map.html'})