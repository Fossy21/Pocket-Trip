"use strict";
// Itinerary content remains in HTML so it never depends on JavaScript.
const printButton=document.getElementById('print-trip');
if(printButton){printButton.hidden=false;printButton.addEventListener('click',()=>window.print());}
const dayLinks=[...document.querySelectorAll('.daynav a')];
function markDay(){dayLinks.forEach(link=>{if(link.hash===location.hash)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}
window.addEventListener('hashchange',markDay);markDay();
document.querySelectorAll('.image-frame img').forEach(img=>{
 function fail(){img.closest('.image-frame').classList.add('image-error');}
 img.addEventListener('error',fail);
 img.addEventListener('load',()=>img.closest('.image-frame').classList.remove('image-error'));
});
