function Tasks(username, age) {
    this.username = username
    this.age = age
}

const obj1 = new Tasks("Samson", 100);
const obj2 = new Tasks("Yussuf", 80);
console.log(obj1);
console.log(obj2);

const array = new Array();
array.push(obj1);
array.push(obj2);

for(arr of array){
    console.log(arr)
}