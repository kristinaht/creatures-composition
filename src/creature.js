
const canEat = function(creature) {
  const obj = {
    eat: function(food) {  //this function is a closure
      return `The ${creature.name} eats the ${food}.` //see line 26 for where .name comes from!!
    }
  }
  return obj;
}



const canSleep =  function(creature) {
  const obj = {
    sleep: function() {
      return `The ${creature.name} sleeps.` //see line 26 for where .name comes from!!
    }
  }
  return obj;
}


//FUNCTION FACTORY FOR CREATURES:
const sleepingEatingCreature = function(name) {
  let state = {
    name
  }
  return {...state, ...canEat(state), ...canSleap(state)}; //canEat() & canSleep() return object. We use the spread operator to merge these objects together.
}



const cat = canEat("cat");
// THIS IS WHAT IS STORED IN cat VARIABLE:
//cat variable is an object with the following property:
// {
//   eat: function(food) {
//     return `The cat eats the ${food}.`
//   }
// }

cat.eat("salmon");
//this returns:
//`The cat eats the salmon.`

const salmon = canEat("salmon");
salmon.eat("insects");
//`The salmon eats the insects.`






























