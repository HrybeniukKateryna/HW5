/*function letString () {
    let word;
    let result = '';
    
    do {
        word = prompt('Enter your word');
        if (word == 'break') {
            break;
        } // я добавила тут if, чтобы слово break не добавлялось к строке. т.е. работает оба варианта кода, но в первом, после введения break, слово сначала добавляется к строке, а потом прерывается цикл.
        result = result + word;
        console.log(result);
    }
    while (word !== 'break');
    }
    letString();
*/

for (i = 0; ; i++) {
    let m = prompt("enter number")
    if (i % 3 == 0) {
        let n = confirm("Continue?");
        if (n == false) {
            break;
        }
    }
   
}
