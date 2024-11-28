
const bigWords = (word, words) => {
    return words.filter((e) => e.length > word.length);
}

const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];

const arr = bigWords('bocina', myArray);
console.log(arr);

const printList = (arr) => {
    const lista = document.querySelector("#lista");
    arr.forEach(e => {
        let item = document.createElement("li");
        item.textContent = e;
        lista.appendChild(item);
    });
}



const btn = document.querySelector(".trigger");
btn.addEventListener("click", () => {
    let userInput = prompt("Please enter a word");
    let newList = bigWords(userInput, myArray);
    printList(newList);
})