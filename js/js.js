console.log("Heloooo");

document.querySelector("#fiskIda").addEventListener("click", function () {
  window.location.href = "infopincetfisk.html";
});

function lukkeKnap(){
    window.location.href = "index.html";
}

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