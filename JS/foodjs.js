

// active navbar

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 30){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
    
}

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse");
navBar.forEach(function(e){
    e.addEventListener("click", function(){
        navCollapse.classList.remove("show"); 
    })
})


// Add active class in nav menu





























