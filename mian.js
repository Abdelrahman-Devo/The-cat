// let show = document.querySelectorAll(".show");
// let textDec = document.querySelectorAll(".text-dec");

// show.addEventListener("click", ()=>{
//      textDec.classList.remove("d-none");
// });
// textDec.addEventListener("click", ()=>{
//      textDec.classList.toggle("d-none");
// });


let show = document.querySelectorAll('.show');
let textDec = document.querySelectorAll(".text-dec");

show.forEach(function (show, index) {
    show.addEventListener('click', ()=>{
        textDec[index].classList.toggle('d-none');
  });
});

// textDec.forEach(function (textDec, index) {
//     textDec.addEventListener('click', ()=>{
//         textDec[index].classList.remove('d-none');
//   });
// });