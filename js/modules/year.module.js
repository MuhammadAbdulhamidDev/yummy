export default function getYear() {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("current-year").textContent =
      new Date().getFullYear();
  });
}
