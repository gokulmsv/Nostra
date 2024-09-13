
let sidenav = document.getElementById("sidenav")
let menuicon = document.getElementById("menuicon")
let closenav = document.getElementById("closenav")


menuicon.addEventListener("click" , function(){
    sidenav.style.left = 0
})

closenav.addEventListener("click" , function(){
    sidenav.style.left = "-50%"
})

// product search functionality

let container = document.getElementById("container")
let search = document.getElementById("search")
let productlist = container.querySelectorAll("div")

search.addEventListener("keyup" , function(event){
    let enteredvalue = event.target.value.toUpperCase()

    for(count = 0;count<productlist.length; count+=1){
        var productname = productlist[count].querySelector("h2").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display = "none"
        }
        else
        {
            productlist[count].style.display = "block"
        }
    }
})

let summercheck = document.getElementById("summercheck")
let summer = document.getElementById("summer")

summercheck.addEventListener("click" ,function(){
    if(summercheck.checked == true){
        summer.style.display = "block"
        beach.style.display = "none"
        party.style.display = "none"
    }
    else
    {
        summer.style.display = "none"
        beach.style.display = "block"
        party.style.display = "block"
    }
})

let beachcheck = document.getElementById("beachcheck")
let beach = document.getElementById("beach")

beachcheck.addEventListener("click" ,function(){
    if(beachcheck.checked == true){
        beach.style.display = "block"
        summer.style.display = "none"
        party.style.display = "none"
    }
    else
    {
        beach.style.display = "none"
        summer.style.display = "block"
        party.style.display = "block"
    }
})

let partycheck = document.getElementById("partycheck")
let party = document.getElementById("party")

partycheck.addEventListener("click" ,function(){
    if(partycheck.checked == true){
        party.style.display = "block"
        summer.style.display = "none"
        beach.style.display = "none"
    }
    else
    {
        party.style.display = "none"
        summer.style.display = "block"
        beach.style.display = "block"
    }
})
