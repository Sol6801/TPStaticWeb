const places = document.querySelectorAll('path')


list = JSON.parse(localStorage.getItem("provinces"));

list.forEach((item) => {
    province.forEach((path) => {
        if (path.id === (item)){
        path.style.fill = "#885e8b";
        }
    })
    console.log(item)
})