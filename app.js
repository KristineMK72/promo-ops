const perLayer = document.getElementById("perLayer");
const layers = document.getElementById("layers");
const total = document.getElementById("total");

if (perLayer && layers) {
  function calc() {
    const t = (Number(perLayer.value) || 0) * (Number(layers.value) || 0);
    total.textContent = t ? `${t} units` : "—";
  }
  perLayer.addEventListener("input", calc);
  layers.addEventListener("input", calc);
}

function copyIssue() {
  let text = "# Promo Teardown\n\n";
  document.querySelectorAll("label.chk").forEach(l => {
    const cb = l.querySelector("input");
    text += `- [${cb.checked ? "x" : " "}] ${l.innerText}\n`;
  });
  navigator.clipboard.writeText(text);
  alert("Copied! Paste into a GitHub Issue.");
}
