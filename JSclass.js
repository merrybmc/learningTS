let objecNunu = {
  q: 'consume',
  w: 'snowball',
};

let objectGaren = {
  q: 'strike',
  w: 'courage',
};

function machine(skill) {
  this.q = skill;
  this.w = 'snowball';
}

let nunu = new machine('consume');
let garen = new machine('strike');
console.log(nunu.q);
console.log(garen.q);

class ClassMachine {
  constructor(skill1, skill2) {
    this.q = skill1;
    this.w = skill2;
  }
}

let nunu2 = new ClassMachine('consume', 'snowball');
let garen2 = new ClassMachine('strike', 'courage');
console.log(nunu2.q);
console.log(nunu2.w);
console.log(garen2.q);
console.log(garen2.w);
