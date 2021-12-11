function enterNumber() {
    let result = '';
    let cont;
    for (i = 1; ; i++) {
        let num = prompt("enter number");
        result = result + num;
        console.log(result);

        if (i % 3 === 0) {
            cont = confirm("Continue?");
        }

        if (cont == false) {
            break;
        }

    }
}

enterNumber();
