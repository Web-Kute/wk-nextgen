(()=>{var e={975:()=>{document.addEventListener("DOMContentLoaded",(function(){var e,t,n,i,r=document.querySelector(".container"),s=document.querySelectorAll(".section"),o=document.querySelectorAll(".noskills"),a=document.querySelector(".item1"),c=document.querySelector(".section__skills-title"),l=document.querySelector(".togglemenu"),u=document.querySelector(".burgermenu"),d=document.querySelector(".burgermenu").childNodes,m=document.querySelectorAll(".menu");function v(){t=a.getAttribute("style"),n=t.split("translate").pop(),i=Number(n.match(/\d+/)[0]),e=r.getBoundingClientRect(),a.getBoundingClientRect(),c.style.width=e.width-2*i+"px",o.forEach((function(t){t.style.width=e.width-2*i+"px"}))}document.querySelector(".response"),document.querySelector(".response__close"),v(),l.addEventListener("click",(function(e){e.stopPropagation(),u.classList.contains("show")?(u.classList.remove("show"),u.classList.add("hide"),l.setAttribute("aria-expanded",!1)):(u.classList.remove("hide"),u.classList.add("show"),l.setAttribute("aria-expanded",!0))})),l.addEventListener("click",(function(){l.classList.toggle("nav-open")})),u.addEventListener("click",(function(e){m.forEach((function(t){t.setAttribute("aria-current",!0),t.classList.remove("active"),e.target.classList.add("active")}))})),document.addEventListener("click",(function(e){e.target!==u&&e.target!==l&&e.target!==d&&(u.classList.add("hide"),u.classList.remove("show"),l.classList.remove("nav-open"),l.setAttribute("aria-expanded",!1)),e.stopPropagation()})),window.addEventListener("scroll",(function(){var e=window.scrollY;s.forEach((function(t){var n=t.offsetHeight,i=t.getBoundingClientRect().top+window.scrollY-150,r=t.dataset.section,s=document.querySelector('.burgermenu [data-id="'+r+'"]');document.querySelector(".burgermenu__item"),e>i&&e<=i+n?(s.classList.add("active"),s.setAttribute("aria-current",!0)):(s.classList.remove("active"),s.setAttribute("aria-current",!1))}))})),window.addEventListener("resize",v),window.addEventListener("change",v)}))},458:()=>{var e=document.getElementById("fullname"),t=document.getElementById("emailuser"),n=document.getElementById("message"),i=(document.getElementById("submit"),document.querySelector(".msg-error"));function r(e){e.nextElementSibling.classList.replace("show","hide"),e.nextElementSibling.nextElementSibling.classList.replace("hide","show")}function s(e){e.nextElementSibling.classList.replace("hide","show"),e.nextElementSibling.nextElementSibling.classList.replace("show","hide")}function o(){var t;""!==e.value&&e.value.length>=4&&(t=e.value,!/\d/.test(t))?(e.style.textTransform="capitalize",r(e)):s(e)}function a(){""!==t.value&&t.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?r(t):s(t)}function c(){""!==n&&n.value.length>60?i.classList.replace("show","hide"):(n.focus(),i.classList.replace("hide","show"),i.innerText="Votre message doit comporté au moins 60 caractères !")}function l(e,t){var n;return function(){for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];n&&clearTimeout(n),n=setTimeout((function(){t.apply(void 0,r),n=null}),e)}}e.addEventListener("focus",(function(){o()})),e.addEventListener("blur",(function(){e.nextElementSibling.classList.replace("show","hide")})),t.addEventListener("focus",(function(){a()})),t.addEventListener("blur",(function(){t.nextElementSibling.classList.replace("show","hide")})),n.addEventListener("focus",(function(){c()})),n.addEventListener("blur",(function(){i.classList.replace("show","hide")}));var u=l(200,o);e.addEventListener("input",u);var d=l(200,a);t.addEventListener("input",d);var m=l(100,c);n.addEventListener("input",m)},416:()=>{var e=new MagicGrid({container:".container",animate:!1,gutter:30,static:!0,useMin:!0,maxColumns:5,items:8});e.listen(),e.positionItems()}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(975),n(458),n(416)})()})();