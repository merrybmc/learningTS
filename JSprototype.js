function machine() {
  this.q = 'strike';
  this.w = 'snowball';
}

let nunu = new machine();

machine.prototype.name = 'kim';

console.log(nunu.name);

let array = [4, 2, 1];
let array2 = new Array(4, 2, 1);
Array.prototype.function = function () {
  console.log('hello');
};

console.log(array);
array.sort();
console.log(array);
console.log(array2);
array2.function();
