// Grab HTML Elements
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});
window.addEventListener("resize", function(event) {
    if(document.body.clientWidth>600){
       let a = menu.className;
       menu.classList.add("hidden");
    }
    
})