var first = 1, second = 1, add = 0, total = 0;

while(add <= 4000000) {
    add = first + second;
    first = second;
    second = add;
    if(add % 2 === 0){
        total = total + add;
    }
}

console.log(total);