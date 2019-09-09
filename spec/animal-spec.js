import { Animal } from './../src/animal.js';

describe('Animal', function() {
  let pet;

  beforeEach(function() {
    pet = new Animal("Rover", "dog");
    jasmine.clock().install();
    pet.setHunger();
    pet.setHappiness();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('check that pet object is created', function() {
    expect(pet.name).toEqual("Rover");
  })

  it('check pet type is set properly', function() {
    expect(pet.type).toEqual("dog");
  })

  it('should decrease food level over time', function() {
    jasmine.clock().tick(20001);
    expect(pet.foodLevel).toEqual(0);
  });

  it('should have a food level of 100 after it is fed', function() {
    pet.foodLevel = 50;
    pet.feed();
    expect(pet.foodLevel).toEqual(100);
  });

  it('hapiness level should decrease over time', function() {
    jasmine.clock().tick(20001);
    expect(pet.happinessLevel).toEqual(0)
  })

  it('should have a hapiness level of 100 after it is played with or has slept', function() {
    pet.happinessLevel = 50;
    pet.play();
    expect(pet.happinessLevel).toEqual(100);
  });


});
