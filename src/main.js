document.addEventListener("DOMContentLoaded", () => {
  const botoes = [
    { btn: document.getElementById("btn00"), secao: "home" },
    { btn: document.getElementById("btn01"), secao: "sobre-mim" },
    { btn: document.getElementById("btn02"), secao: "formacao" },
    { btn: document.getElementById("btn03"), secao: "portfolio" },
    { btn: document.getElementById("btn04"), secao: "contato" },
  ];

  botoes.forEach(({ btn, secao }) => {
    btn.addEventListener("click", () => {
      botoes.forEach(({ secao: s, btn: b }) => {
        document.getElementById(s).classList.add("oculto");
        b.classList.remove("active");
      });
      document.getElementById(secao).classList.remove("oculto");
      btn.classList.add("active");
    });
  });
});
