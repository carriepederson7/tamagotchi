export default class Animal {

  constructor(name, type){
    this.name = name;
    this.type = type;
    this.isDead = false;
    this.isDepressed = false;
    this.foodLevel = 100;
    this.happinessLevel = 100;
  }

  feed(){
    this.foodLevel += 30;
    if(this.foodLevel > 100){
      this.foodLevel = 100;
    }
  }

  play(){
    this.happinessLevel += 30;
    if(this.happinessLevel > 100){
      this.happinessLevel = 100
    }
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel-=5;
      if (this.foodLevel <= 0){
        this.isDead = true;
      }
    }, 3000);
  }

  setHappiness() {
    setInterval(() => {
      this.happinessLevel-=5;
      if(this.happinessLevel <= 0){
        this.happinessLevel = 0;
        this.isDepressed = true;
      } else {
        this.isDepressed = false;
      }
    }, 3000);
  }

}
