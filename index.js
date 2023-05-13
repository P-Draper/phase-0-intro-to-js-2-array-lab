const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    cats.push("Ralph");
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat() {
    const moreCats = [...cats, "Broom"];
    return moreCats;
}
function prependCat() {
    const moreCats = ["Arnold", ...cats];
    return moreCats;
}
function removeLastCat() {
    const lessCats = cats.slice(0, cats.length - 1);
    return lessCats;
}
function removeFirstCat() {
    const lessCatsFront = cats.slice(1);
    return lessCatsFront;
}
    

