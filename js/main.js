'use strict';

for (let i = 0; i < 5; i++){
    console.log("現在の数字は" + i +  "です");
}

{
    const word = 'red';
    let loc = 0;


    const target = document.getElementById('target');
    target.textContent = word;
    





    document.addEventListener('keydown', e =>{
        if (e.key === word[loc]){
            loc++;




            // 1: _ed
            // 2: __d
            // 3: ___
            target.textContent = '_'.repeat(loc) + word.substring(loc);
        }
    });
}


