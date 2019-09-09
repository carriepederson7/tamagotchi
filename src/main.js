import Animal from './animal.js';



//frontend
$(document).ready(function() {
  let animalArray = [];
  $('form#pet-info').submit(function(event) {
    event.preventDefault();

    let name = $('input#pet-name').val();
    let type = $('input:radio[name=type]:checked').val();

    let newPet = new Animal(name, type);
    animalArray.push(newPet);
  })


  //update html

  setInterval(updateHTML(), 1000);



  function updateHTML() {
    let newHtml = "";

    animalArray.forEach((pet) => {
      newHtml += 



    });





  }
})
