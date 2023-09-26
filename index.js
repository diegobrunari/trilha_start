var elementosDuvida = document.querySelectorAll(".duvida");

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    duvida.classList.toggle("ativa");
  });
});

function botaoSubir() {
  if (window.scrollY !== 0) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
}

window.addEventListener("scroll", function () {
  const botaoSubirTopo = document.getElementById("botaoSubir");
  if (window.scrollY > 200) {
    botaoSubirTopo.style.display = "block";
  } else {
    botaoSubirTopo.style.display = "none";
  }
});
