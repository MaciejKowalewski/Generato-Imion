function losujImie() {
    let imie = [],
        alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < Math.floor((Math.random() * 24) + 1); i++) {
        imie[i] = alfabet[Math.floor((Math.random() * alfabet.length) + 1)];
    }
    imie[0] = imie[0].toUpperCase();
    return imie.join('');
}
