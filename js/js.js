console.log("Heloooo");

/* Her er JavaScriptet der gør at vi kan trykke på fiskene */
/* Lavet af alle i fællesskab */

document.querySelector("#fiskIda").addEventListener("click", function () {
  window.location.href = "infopincetfisk.html";
});

document.querySelector("#fiskBenjamin").addEventListener("click", function () {
  window.location.href = "infogulfinnetkirurgfisk.html";
});

document
  .querySelector("#fiskJosephine2")
  .addEventListener("click", function () {
    window.location.href = "inforævefjæs.html";
  });

document.querySelector("#fiskMathilde").addEventListener("click", function () {
  window.location.href = "infosohalkirurgfisk.html";
});

document.querySelector("#fiskJosephine").addEventListener("click", function () {
  window.location.href = "infoklovnfisk.html";
});

/* Her er JavaScriptet for lukke knappen (rødt kryds), som bliver brugt på alle siderne til spil og infomationer */
/* Lavet af Josephine og Ida */
function lukkeKnap() {
  window.location.href = "index.html";
}

/* Her er JavaScriptet for boblerne til at komme ind på spil*/
/* Lavet af Josephine og Ida */
document.querySelector("#puslespilKnap").addEventListener("click", function () {
  window.location.href = "puslespil.html";
});

document
  .querySelector("#farvelægspilKnap")
  .addEventListener("click", function () {
    window.location.href = "farvelægspil.html";
  });

document
  .querySelector("#findfemfejlKnap")
  .addEventListener("click", function () {
    window.location.href = "findfemfejlspil.html";
  });

document.querySelector("#vendespilKnap").addEventListener("click", function () {
  window.location.href = "vendespil.html";
});
