(function(){
    let btn = document.querySelector('button');
        btn.addEventListener('click', losujImie);
}())

function losujImie() {
    let name = [],
        alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z'],
        output = document.querySelector('textarea'),
        inputs = document.querySelectorAll('input');
    for (let i = 0; i < Math.floor((Math.random() * 24) + 1); i++) {
        name[i] = alphabet[Math.floor((Math.random() * alphabet.length))];
    }
    if(inputs[0].checked){
        name[name.length-1] = 'a';
    }
    else if(inputs[2].checked){
        name[name.length-1] = 'o';
    }
    name[0] = name[0].toUpperCase();
    output.textContent = name.join('');
}
