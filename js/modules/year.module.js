export default function getYear() {
  document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("current-year").textContent =
      new Date().getFullYear();
  });
}
