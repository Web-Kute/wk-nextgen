(()=>{var e={975:()=>{document.addEventListener("DOMContentLoaded",(function(){var e,t,n,r,o=document.querySelector(".container"),i=document.querySelectorAll(".section"),a=document.querySelectorAll(".noskills"),c=document.querySelector(".item1"),s=document.querySelector(".section__skills-title"),d=document.querySelector(".togglemenu"),u=document.querySelector(".burgermenu"),l=document.querySelector(".burgermenu").childNodes,m=document.querySelectorAll(".menu"),v=document.querySelector(".arrow-up");function g(){t=c.getAttribute("style"),n=t.split("translate").pop(),r=Number(n.match(/\d+/)[0]),e=o.getBoundingClientRect(),c.getBoundingClientRect(),s.style.width=e.width-2*r+"px",a.forEach((function(t){t.style.width=e.width-2*r+"px"}))}g(),d.addEventListener("click",(function(e){e.stopPropagation(),u.classList.contains("show")?(u.classList.remove("show"),u.classList.add("hide"),d.setAttribute("aria-expanded",!1)):(u.classList.remove("hide"),u.classList.add("show"),d.setAttribute("aria-expanded",!0))})),d.addEventListener("click",(function(){d.classList.toggle("nav-open")})),u.addEventListener("click",(function(e){m.forEach((function(t){t.setAttribute("aria-current",!0),t.classList.remove("active"),e.target.classList.add("active")}))})),document.addEventListener("click",(function(e){e.target!==u&&e.target!==d&&e.target!==l&&(u.classList.add("hide"),u.classList.remove("show"),d.classList.remove("nav-open"),d.setAttribute("aria-expanded",!1)),e.stopPropagation()})),window.addEventListener("scroll",(function(){var e=window.scrollY;i.forEach((function(t){var n=t.offsetHeight,r=t.getBoundingClientRect().top+window.scrollY-150,o=t.dataset.section,i=document.querySelector('.burgermenu [data-id="'+o+'"]');document.querySelector(".burgermenu__item"),e>r&&e<=r+n?(i.classList.add("active"),i.setAttribute("aria-current",!0)):(i.classList.remove("active"),i.setAttribute("aria-current",!1))}))})),window.addEventListener("resize",g),window.addEventListener("change",g),v.addEventListener("click",(function(){window.scroll({top:0,left:0,behavior:"smooth"})})),window.matchMedia("(orientation: portrait)").addEventListener("change",(function(e){e.matches,location.reload()}))}))},416:()=>{var e=new MagicGrid({container:".container",animate:!1,gutter:30,static:!0,useMin:!0,maxColumns:5,items:8});e.listen(),e.positionItems()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(975),n(416)})()})();