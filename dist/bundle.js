(()=>{var e={975:()=>{document.addEventListener("DOMContentLoaded",(function(){var e,t,n,i,s=document.querySelector(".container"),r=document.querySelectorAll(".section"),o=document.querySelectorAll(".noskills"),a=document.querySelector(".item1"),c=document.querySelector(".section__skills-title"),l=document.querySelector(".togglemenu"),d=document.querySelector(".burgermenu"),u=document.querySelector(".burgermenu").childNodes,m=document.querySelectorAll(".menu"),v=document.querySelector(".response"),g=document.querySelector(".response__close");function h(){t=a.getAttribute("style"),n=t.split("translate").pop(),i=Number(n.match(/\d+/)[0]),e=s.getBoundingClientRect(),a.getBoundingClientRect(),c.style.width=e.width-2*i+"px",o.forEach((function(t){t.style.width=e.width-2*i+"px"})),v.style.width=e.width-2*i+"px"}h(),l.addEventListener("click",(function(e){e.stopPropagation(),d.classList.contains("show")?(d.classList.remove("show"),d.classList.add("hide"),l.setAttribute("aria-expanded",!1)):(d.classList.remove("hide"),d.classList.add("show"),l.setAttribute("aria-expanded",!0))})),l.addEventListener("click",(function(){l.classList.toggle("nav-open")})),d.addEventListener("click",(function(e){m.forEach((function(t){t.setAttribute("aria-current",!0),t.classList.remove("active"),e.target.classList.add("active")}))})),g.addEventListener("click",(function(){v.classList.add("hidden")})),document.addEventListener("click",(function(e){e.target!==d&&e.target!==l&&e.target!==u&&(d.classList.add("hide"),d.classList.remove("show"),l.classList.remove("nav-open"),l.setAttribute("aria-expanded",!1)),e.stopPropagation()})),window.addEventListener("scroll",(function(){var e=window.scrollY;r.forEach((function(t){var n=t.offsetHeight,i=t.getBoundingClientRect().top+window.scrollY-150,s=t.dataset.section,r=document.querySelector('.burgermenu [data-id="'+s+'"]');document.querySelector(".burgermenu__item"),e>i&&e<=i+n?(r.classList.add("active"),r.setAttribute("aria-current",!0)):(r.classList.remove("active"),r.setAttribute("aria-current",!1))}))})),window.addEventListener("resize",h),window.addEventListener("change",h)}))},458:()=>{var e=document.getElementById("fullname"),t=document.getElementById("emailuser"),n=document.getElementById("message"),i=(document.getElementById("submit"),document.querySelector(".msg-error"));function s(e){e.nextElementSibling.classList.replace("show","hide"),e.nextElementSibling.nextElementSibling.classList.replace("hide","show")}function r(e){e.nextElementSibling.classList.replace("hide","show"),e.nextElementSibling.nextElementSibling.classList.replace("show","hide")}function o(){var t;""!==e.value&&e.value.length>=4&&(t=e.value,!/\d/.test(t))?(e.style.textTransform="capitalize",s(e)):r(e)}function a(){""!==t.value&&t.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?s(t):r(t)}function c(){""!==n&&n.value.length>60?i.classList.replace("show","hide"):(n.focus(),i.classList.replace("hide","show"),i.innerText="Votre message doit comporté au moins 60 caractères !")}function l(e,t){var n;return function(){for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];n&&clearTimeout(n),n=setTimeout((function(){t.apply(void 0,s),n=null}),e)}}e.addEventListener("focus",(function(){o()})),e.addEventListener("blur",(function(){e.nextElementSibling.classList.replace("show","hide")})),t.addEventListener("focus",(function(){a()})),t.addEventListener("blur",(function(){t.nextElementSibling.classList.replace("show","hide")})),n.addEventListener("focus",(function(){c()})),n.addEventListener("blur",(function(){i.classList.replace("show","hide")}));var d=l(200,o);e.addEventListener("input",d);var u=l(200,a);t.addEventListener("input",u);var m=l(100,c);n.addEventListener("input",m)},416:()=>{var e=new MagicGrid({container:".container",animate:!1,gutter:30,static:!0,useMin:!0,maxColumns:5,items:8});e.listen(),e.positionItems()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(975),n(458),n(416)})()})();