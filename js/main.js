//preparazione
const welcomeMsgElement = document.querySelector("#welcome");
const titleElement = document.querySelector("h1");
let classeColore = "text-gray";
let msg = "Ciao, sconosciuto!";

//input
const nomeUtente = prompt("Come ti chiami?");
const coloreUtente = prompt("Team rosso o verde?");

//gestione evento
titleElement.addEventListener("click", function () {
    //la funzione VERRA' eseguita SE/QUANDO si verifica un click
    //in quel momento verrà letto il valore corrente di classeColore
    titleElement.classList = classeColore;
    // this.classList = classeColore;
});

//elaborazione
if (coloreUtente == "rosso") {
    classeColore = "text-red";
} else if (coloreUtente == "verde") {
    classeColore = "text-green";
}

if (nomeUtente) {
    msg = `Ciao, ${nomeUtente}!`;
}

//output
welcomeMsgElement.innerHTML = msg;
// welcomeMsgElement.style.color = coloreInglese;
welcomeMsgElement.classList = classeColore;
