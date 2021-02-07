let oldArray = [1,2,3,4,5,6,7,8,9,10];

function reverse() {
    var newArray = [];
    for (var i = oldArray.length - 1; i >= 0; i--) {
      newArray.push(oldArray[i]);
    }
    console.log(newArray);
  }

  reverse();