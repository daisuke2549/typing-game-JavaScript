'use strict';

for (let i = 0; i < 5; i++){
    console.log("現在の数字は" + i +  "です");
}

{
    document.addEventListener('keydown', e =>{
        const target = document.getElementById('target');
        target.textContent = e.key;
    });
}


