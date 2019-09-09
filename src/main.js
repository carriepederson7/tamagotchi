import Animal from './animal.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



//frontend
$(document).ready(function() {
  let pets = [];
  $('form#pet-info').submit(function(event) {
    $('div#no-pet-name').hide();
    event.preventDefault();
    let name = $('input#pet-name').val();
    let type = $('input:radio[name=type]:checked').val();
    if(name){
      let newPet = new Animal(name, type);

      pets.push(newPet);
      attachContactListeners(pets);
      newPet.setHunger();
      newPet.setHappiness();
      setInterval(function() {
        updateHTML(pets)}, 1000);
    } else {
      $('div#no-pet-name').show();
    }
  })
})

function attachContactListeners(pets) {
  $('div#output').on("click", "button", function() {
    let id = this.id;
    console.log(id);
    if(id[0] === "f"){
      let petName = id.slice(4);
      pets.forEach(function(pet) {
        if(pet.name === petName) {
          pet.feed();
        }
      });
    }else if (id[0] === "p") {
      let petName = id.slice(4);
      pets.forEach(function(pet) {
        if(pet.name === petName) {
          pet.play();
        }
      });
    } else {
      let petName = id.slice(5);
      pets.forEach(function(pet) {
        if(pet.name === petName) {
          pet.play();
        }
      });
    }
  });
}

function updateHTML(pets) {
  let newHtml = "";
  pets.forEach(function(pet){

    if(pet.isDead === true){
      newHtml += `<p>${pet.name} is dead.</p>`
    }else{
      if(pet.isDepressed === true){
        newHtml += `<p>${pet.name} is depressed.</p>`;
      }
      newHtml += `<p>Animal name: ${pet.name}</p>`;
      newHtml += `<br><p>hunger level: ${pet.foodLevel}</p>`;
      newHtml += `<br><p>happiness level: ${pet.happinessLevel}`
      newHtml += `<br><button id= "feed${pet.name}"> Feed </button>`
      newHtml += `<br><button id= "play${pet.name}"> Play </button>`
      newHtml += `<br><button id= "sleep${pet.name}"> Sleep </button>`
    }
  })
  $('div#output').html(newHtml);
}
