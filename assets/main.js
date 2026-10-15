(() => {
const toggle=document.querySelector(".nav-toggle"),nav=document.querySelector("#primary-nav");
if(toggle&&nav){toggle.addEventListener("click",()=>{const open=toggle.getAttribute("aria-expanded")==="true";toggle.setAttribute("aria-expanded",String(!open));nav.classList.toggle("is-open",!open);});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("is-open");toggle.setAttribute("aria-expanded","false");}));}
document.querySelectorAll("[data-year]").forEach(n=>n.textContent=String(new Date().getFullYear()));
})();