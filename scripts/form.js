const places = document.querySelectorAll('path')
const form = document.querySelector('form')

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
  window.document.location = 'map.html'
})

