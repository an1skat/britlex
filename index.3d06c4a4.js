!function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("audio"),t=document.getElementById("playButton"),n=function(){var n,d,i=(n=1,d=10,Math.floor(Math.random()*(d-n+1))+n);console.log("Generated random number: ".concat(i));var s=document.querySelector("header"),o=document.querySelector("main"),a=document.querySelector("footer"),l=document.querySelector("img[alt='gif']");6===i?(s.classList.add("hidden"),o.classList.add("hidden"),a.classList.add("hidden"),l.style.display="block",t.classList.remove("hidden"),e.play()):(s.classList.remove("hidden"),o.classList.remove("hidden"),a.classList.remove("hidden"),l.style.display="none",t.classList.add("hidden"),e.pause(),e.curentTime=0)};window.addEventListener("load",(function(){n()})),t.addEventListener("click",(function(){e.play()}))})),document.addEventListener("DOMContentLoaded",(function(){new Swiper(".products-swiper",{loop:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{768:{slidesPerView:3},1200:{slidesPerView:4}}}),new Swiper(".reviews-swiper",{loop:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{768:{slidesPerView:2},1200:{slidesPerView:3}}})}));var e={openBtn:document.querySelector("[data-modal-open]"),closeBtn:document.querySelector("[data-modal-close]"),closeBtn2:document.querySelector("[data-modal-close2]"),modal:document.querySelector("[data-modal]"),modal2:document.querySelector("[data-modal2]"),overlay:document.querySelector("[data-modal-overlay]"),sendBtn:document.querySelector(".reviews__btn--submit")};function t(){e.modal.classList.toggle("is-hidden"),e.overlay.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function n(){e.modal2.classList.add("is-hidden"),e.overlay.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}e.openBtn.addEventListener("click",t),e.closeBtn.addEventListener("click",t),e.overlay.addEventListener("click",(function(){e.modal.classList.contains("is-hidden")?e.modal2.classList.contains("is-hidden")||n():t()})),e.closeBtn2.addEventListener("click",n),e.sendBtn.addEventListener("click",(function(t){t.preventDefault(),e.modal.classList.add("is-hidden"),e.modal2.classList.remove("is-hidden")})),document.addEventListener("keydown",(function(d){"Escape"===d.key&&(e.modal.classList.contains("is-hidden")?e.modal2.classList.contains("is-hidden")||n():t())}));var d=document.querySelector("#phone");window.intlTelInput(d,{initialCountry:"ua",separateDialCode:!0,utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.11/build/js/utils.js"})}();
//# sourceMappingURL=index.3d06c4a4.js.map
