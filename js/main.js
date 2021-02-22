'use strict';

for (let i = 0; i < 5; i++){
    console.log("現在の数字は" + i +  "です");
}
console.log(100+200);




{
   function setWord(){
    word = words[Math.floor(Math.random() * words.length)];
    target.textContent = word;
    loc = 0;
   }


　　const words = [
       'red',
       'blue',
       'pink',
   ];

    let word;
    let loc = 0;


    const target = document.getElementById('target');

    setWord();



    document.addEventListener('keydown', e =>{
        if (e.key !== word[loc]){
            return;
        }

            loc++;

        // 1: _ed
        // 2: __d
        // 3: ___
        target.textContent = '_'.repeat(loc) + word.substring(loc);

        if(loc === word.length){
            setWord();
        }
    });
}


