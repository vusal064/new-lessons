let input = prompt("Eded daxil edin:")

function isOdd(num){
    if(Number(num)%2==0){
        console.log("even")
    } else if(Number(num)%2==1) {
        console.log("odd")
    }
}

isOdd(input)