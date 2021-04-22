function getRandom(max){
    return Math.random(Math.random() * max);
}
//Math.random()関数は、 0 以上 1 未満 (0 は含むが、 1 は含まない) の範囲で浮動小数点の擬似乱数を返す



console.log(getRandom(3));

console.log(getRandom(100));


score = 76.222233333333;
number = -5.2;

//Math floor = 与えられた数値以下の最大の整数を返す
console.log(Math.floor(score));

console.log(Math.floor(number));


var score = 60;
console.log(score);
var score = 90;
console.log(score);

let name = "suzuki";
console.log(name);

name = "tanaka";
console.log(name);
//let は再代入が可能。

const number2 = 10;
console.log(number2);
console.log(Math.floor(8.95));

for (let i = 1; i <= 100; i++){
    if(i % 15 === 0){
        console.log("fizzbuzz");
    }else if(i % 3 === 0){
        console.log("fizz");
    }else if(i % 5 === 0){
        console.log("buzz");
    }
    else{
        console.log(i);
    }
}

let txt = "テキスト";
txt += "text";
console.log(txt);

let btn = $("#btn-magic").val();
console.log(btn);
