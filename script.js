
//Sidebar
var sidebar = document.getElementById("sidebar")
var menu = document.getElementById("menu")
var sidebar_close = document.getElementById("sidebar_close")

menu.addEventListener("click",function(){
    sidebar.style.right = 0
})

sidebar_close.addEventListener("click",function(){
    sidebar.style.right = "-50%"
})

//search functionality
var searchbox = document.getElementById("searchbox")
var product_container = document.getElementById("product_container")
var product_list = product_container.querySelectorAll("div")

searchbox.addEventListener("keyup", function () {

    var enteredvalue = event.target.value.toUpperCase()
    for (count = 0; count < product_list.length; count = count + 1) {

        var productname = product_list[count].querySelector("h5").textContent
        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            product_list[count].style.display = "none"
        }
        else {
            product_list[count].style.display = "inline"
        }
    }
})