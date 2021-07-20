
/* Toggle Hamburger Menu */
let myNav = document.getElementById("nav-bar");
let navLinks = myNav.querySelectorAll("li");
console.log(navLinks);
let hamMenu = document.getElementById("ham-menu");
hamMenu.addEventListener("click", () => {
    myNav.classList.toggle("active");
    hamMenu.classList.toggle("fa-times");
});
navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        myNav.classList.remove("active");
        hamMenu.classList.toggle("fa-times");
    });
});


window.onscroll = function() {
    /*
         Scroll Indicator
    */
    let pos =  document.documentElement.scrollTop;
    let calc_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scroll = pos * 100 / calc_height;
    document.getElementById("progress").style.width= `${scroll}%`;

    /*
        Scroll To Top
    */
   
    let scrollTopBtn = document.getElementById("scroll-top-btn");
    if(pos > 300){
        scrollTopBtn.style.display = "grid";
    }
    else{
        scrollTopBtn.style.display = "none";
    }
    scrollTopBtn.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });
}
