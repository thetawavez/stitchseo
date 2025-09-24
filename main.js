
async function loadComponent(url, elementId) {
  const response = await fetch(url);
  const text = await response.text();
  document.getElementById(elementId).innerHTML = text;
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header.html", "header-placeholder");
  loadComponent("footer.html", "footer-placeholder");
});
