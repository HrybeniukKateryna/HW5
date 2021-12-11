function enterMessage() {
    let result = '';
    let cont;
    for (i = 1; ; i++) {
        let mes = prompt("enter your message");
        result = result + mes;
        console.log(result);

        if (i % 3 === 0) {
            cont = confirm("Continue?");
        }

        if (cont == false) {
            break;
        }

    }
}

enterMessage();
