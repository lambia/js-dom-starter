//preparazione
const welcomeMsgElement = document.querySelector("#welcome");
const titleElement = document.querySelector("h1");
const subtitleElement = document.querySelector("h2");
let classeColore = "text-gray";
let msg = "Ciao, sconosciuto!";

//input
// const nomeUtente = prompt("Come ti chiami?");
// const coloreUtente = prompt("Team rosso o verde?");
const nomeUtente = "Luca";
const coloreUtente = "rosso";

//gestione evento
titleElement.addEventListener("click", function () {
    //la funzione VERRA' eseguita SE/QUANDO si verifica un click
    //in quel momento verrà letto il valore corrente di classeColore

    // passa da colore normale a quello desiderato (manualmente)
    // if (titleElement.classList.contains(classeColore)) {
    //     titleElement.classList.remove(classeColore);
    // } else {
    //     titleElement.classList.add(classeColore);
    // }

    // passa da colore normale a quello desiderato (toggle)
    // titleElement.classList.toggle(classeColore);

    //se l'elemento è rosso, diventa verde - o viceversa
    // if (titleElement.classList.contains("text-red")) {
    //     titleElement.classList.remove("text-red");
    //     titleElement.classList.add("text-green");
    // } else {
    //     titleElement.classList.add("text-red");
    //     titleElement.classList.remove("text-green");
    // }

    //switcha lo stato di entrambe le classi, quindi
    //SE inizialmente esiste solo una delle due classi
    //switcha tra una classe e l'altra
    titleElement.classList.toggle("text-red");
    titleElement.classList.toggle("text-green");
});

subtitleElement.addEventListener("mouseover", function () {
    subtitleElement.classList.add(classeColore);
});
subtitleElement.addEventListener("mouseout", function () {
    subtitleElement.classList.remove(classeColore);
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
