// arrays
var fruits = ["apple","pineapple","banana","guava","grape"]
console.log (fruits[4]);

fruits.push("lemon")
console.log(fruits)
console.log(fruits[5])

fruits.pop()
console.log(fruits)

fruits.unshift("mango");
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits[0]="orange"
console.log (fruits[0])

fruits[0].remove();
console.log(fruits)

fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)

fruits.splice(0, 1);
console.log(fruits)

