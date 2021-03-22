let pet ={
type:"Dog:",
name:"Dana",
numLegs:4,
sayName:function(){return "The name of my dog is "+this.name+"."},
sayLegs:function(){return "My dog has this many legs: "+this.numLegs+"."},
};

console.log(pet.sayName());
console.log(pet.sayLegs());