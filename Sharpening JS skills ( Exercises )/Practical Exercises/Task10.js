let array = [1,2,3,4,5,6,7,8,9];
let sum = 0;
let result;
array.forEach(calculate);

function calculate(item){
    sum += item;
    result = sum / array.length;
    console.log(result);;
}