console.log("Heloooo");

document.querySelector("#fiskIda").addEventListener("click", function () {
  window.location.href = "infopincetfisk.html";
});

document.querySelector("#fiskBenjamin").addEventListener("click", function () {
  window.location.href = "infogulfinnetkirurgfisk.html";
});

function lukkeKnap(){
    window.location.href = "index.html";
}

document.querySelector("#puslespilKnap").addEventListener("click", function () {
  window.location.href = "puslespil.html";
});

/*
function lukkeKnap() {
  const knap = document.createElement("button");
  knap.textContent = "Tilbage";
  knap.classList.add("lukkeknap");
  knap.addEventListener("click", function () {
    window.location.href = "..index.html";
  });
}
*/