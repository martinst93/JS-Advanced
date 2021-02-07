let arrayOfNum = [1,5,7,9,-3,2,56,-15,-46];

function sum() {
    let sum = 0;
    for(let i = 0; i < arrayOfNum.length; i++) {
        if(arrayOfNum[i] > 0) {
            sum += arrayOfNum[i];
        }
    }
    console.log(sum);
}

sum();