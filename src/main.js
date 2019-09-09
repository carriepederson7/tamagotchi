import Animal from './animal.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



//frontend
$(document).ready(function() {
  let newPet;
  $('form#pet-info').submit(function(event) {
    $('div#no-pet-name').hide();
    event.preventDefault();
    let name = $('input#pet-name').val();
    let type = $('input:radio[name=type]:checked').val();
    if(name){
      newPet = new Animal(name, type);
      attachContactListeners(newPet);
    } else {
      $('div#no-pet-name').show();
    }
    newPet.setHunger();
    newPet.setHappiness();
    setInterval(function() {
      updateHTML(newPet)}, 1000);
    // animalArray.push(newPet);
  })


  $("button#feed").click(function(event){
    console.log("check");
    event.preventDefault();
    newPet.feed();
  });

  function attachContactListeners(newPet) {
    $('div#output').on("click", "button", function() {
      var id = this.id
      if(id === "feed"){
        newPet.feed();
      }else{
        newPet.play();
      }
    });
  }


  function updateHTML(pet) {
    let newHtml = "";
    newHtml += `<p>Animal name: ${pet.name}</p>`;
    newHtml += `<br><p>hunger level: ${pet.foodLevel}</p>`;
    newHtml += `<br><p>happiness level: ${pet.happinessLevel}`
    newHtml += `<br><button id= "feed"> Feed </button>`
    newHtml += `<br><button id= "play"> Play </button>`
    newHtml += `<br><button id= "sleep"> Sleep </button>`

    $('div#output').html(newHtml);

  }
})
