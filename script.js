let cripto = [];

function copy() {
    navigator.clipboard.writeText(cripto.join('')).then(() => {
        alert('Copiado para área de transferência.');
    })
}

function criptograph() {

    cripto = [];

    const input = document.getElementById('textinput');

    let string = input.value;

    if (!string) {
        window.alert("Você precisa digitar um texto para ser criptografado.");
        return;
    }

    function checkspell() {
        var filter_nome = /^([a-z]|\s+)+$/;
        if (!filter_nome.test(input.value)) {
            input.value = '';
            input.placeholder = "Você precisa digitar apenas letras minúsculas";
            return false;
        } else {
            return true;
        }
    }

    if (!checkspell()) return;

    let cont;

    for (cont = 0; cont < input.value.length; cont++) {
        if (string[cont] == "a") {
            cripto.push("ai");
        }
        else if (string[cont] == "e") {
            cripto.push("enter");
        }
        else if (string[cont] == "i") {
            cripto.push("imes");
        }
        else if (string[cont] == "o") {
            cripto.push("ober");
        }
        else if (string[cont] == "u") {
            cripto.push("ufat");
        }
        else {
            cripto.push(string[cont]);
        }
    }

    input.value = '';

    input.placeholder = 'Digite seu texto';

    const output = document.getElementById('outputBox');

    output.innerHTML = '';

    const div = document.createElement('div');

    div.className = "resultDiv"

    output.appendChild(div);

    createParagraph = document.createElement('p');

    createParagraph.innerHTML = cripto.join('');

    createParagraph.className = "resultParagraph";

    div.appendChild(createParagraph);

    const copyButton = document.createElement("button");

    copyButton.innerHTML = "Copiar";

    copyButton.className = "copyToClipboard";

    div.appendChild(copyButton);

    copyButton.onclick = () => copy();
}

function decriptograph() {

    cripto = [];

    const input = document.getElementById('textinput');

    let string = input.value;

    if (!string) {
        window.alert("Você precisa digitar um texto para ser criptografado.");
        return;
    }

    function checkspell() {
        var filter_nome = /^([a-z]|\s+)+$/;
        if (!filter_nome.test(input.value)) {
            input.value = '';
            input.placeholder = "Você precisa digitar apenas letras minúsculas";
            return false;
        } else {
            return true;
        }
    }

    if (!checkspell()) return;

    let cont;

    for (cont = 0; cont < input.value.length; cont++) {
        if (string[cont] == "a") {
            cripto.push("a")
            cont++
        }
        else if (string[cont] == "e") {
            cripto.push("e")
            cont = cont + 4
        }
        else if (string[cont] == "i") {
            cripto.push("i")
            cont = cont + 3
        }
        else if (string[cont] == "o") {
            cripto.push("o")
            cont = cont + 3
        }
        else if (string[cont] == "u") {
            cripto.push("u")
            cont = cont + 3
        }
        else {
            cripto.push(string[cont]);
        }
    }

    input.value = '';

    input.placeholder = 'Digite seu texto';

    const output = document.getElementById('outputBox');

    output.innerHTML = '';

    createParagraph = document.createElement('p');

    createParagraph.innerHTML = cripto.join('');

    createParagraph.className = "resultParagraph";

    output.appendChild(createParagraph);

    const copyButton = document.createElement("button");

    copyButton.innerHTML = "Copiar";

    copyButton.className = "copyToClipboard";

    output.appendChild(copyButton);

    copyButton.onclick = () => copy();
}