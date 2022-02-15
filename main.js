
const letras = ["a", "b", "c", "d"];

letras.forEach((e) => console.log(e)); // Devuelve 'a' / 'b' / 'c' / 'd'
letras.forEach((e, i) => console.log(e, i)); // Devuelve 'a' 0 / 'b' 1 / 'c' 2 / 'd' 3
letras.forEach((e, i, a) => console.log(a[0])); // Devuelve 'a' / 'a' / 'a' / 'a'  