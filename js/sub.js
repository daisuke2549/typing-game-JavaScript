function getRandom(max){
    return Math.random(Math.random() * max);
}
//Math.random()関数は、 0 以上 1 未満 (0 は含むが、 1 は含まない) の範囲で浮動小数点の擬似乱数を返す


console.log(getRandom(3));

console.log(getRandom(100));


score = 76.222233333333;
number = 145.46274682346828322;

//Math floor = 与えられた数値以下の最大の整数を返す
console.log(Math.floor(score));

console.log(Math.floor(number));