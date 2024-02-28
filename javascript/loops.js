for (var y = 1; y <= 20; y++) {
    if (y % 2 == 0 && y % 3 == 0) {
        console.log(y + "fizzbuzz")
    }else if(y % 2==0) {
        console.log( y+ "fizz")
    }else if(y % 3==0) {
        console.log(y + "buzz")
    }else{
        console.log(y)
    }
}