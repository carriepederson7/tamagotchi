export default class Animal {

  constructor(name, type){
    this.name = name;
    this.type = type;
    this.foodLevel = 100;
    this.happinessLevel = 100;
  }

  feed(){
    this.foodLevel = 100;

  }

  play(){
    this.happinessLevel = 100;

  }

  setHunger() {
    setInterval(() => {
      this.foodLevel-=5;
    }, 1000);
  }

  setHappiness() {
    setInterval(() => {
      this.happinessLevel-=5;
    }, 1000);
  }

}
