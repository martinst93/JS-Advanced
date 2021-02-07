let array = [1, 2, 3, 4, 9];
    
    
    let sum = array.reduce(function(a, b){
        return a + b;
    }, 0);
    
    console.log(sum);