// select sidenav and menuicon

let sidenav = document.getElementById("sidenav")
let menuicon = document.getElementById("menuicon")
let closenav = document.getElementById("closenav")
let offer = document.getElementById("offer")

let currentslide = 1
let slides = document.getElementById('slider').getElementsByTagName('li')
totalslides = slides.length;
console.log(totalslides)

let left = document.getElementById("leftactivate")
let right = document.getElementById("rightactivate")
let exit = document.getElementById("exit")

exit.addEventListener("click" , function(){
    offer.style.display = "none"
})
menuicon.addEventListener("click" , function(){
    sidenav.style.left = 0
})

closenav.addEventListener("click" , function(){
    sidenav.style.left = "-50%"
})

left.addEventListener("click", function(){
    if (currentslide > 1) {  // Ensure we are not on the first slide
        currentslide--;
    }
    else{
        currentslide = totalslides
    }
    showslide();
});

right.addEventListener("click", function(){
    if (currentslide < totalslides) {  // Ensure we are not on the last slide
        currentslide++;
    }
    else{
        currentslide = 1
    }
    showslide();
});


function showslide(){
    
    for (let index = 0; index < totalslides; index++) {
        const element = slides[index];
        if(currentslide == index+1){
            element.classList.remove('hidden')
        }
        else{
            element.classList.add('hidden')
        }
    }
}

let heart = document.getElementById("heart")

function toggleHeart(heart) {
    if (heart.getAttribute("fill") === "none") {
      heart.setAttribute("fill", "red");
    } else {
      heart.setAttribute("fill", "none");
    }
  }
