let upVotebtn = document.querySelector(`#add`)
let downVotebtn = document.querySelector(`#substract`);
let input = document.querySelector(`input`);

upVotebtn.addEventListener(`click`,()=>{
    input.value = parseInt(input.value)+1;
})

upVotebtn.addEventListener(`click`, () => {
  input.value = parseInt(input.value) - 1;
});

