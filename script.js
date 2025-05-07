const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const saveTeamBtn = document.getElementById("saveTeamBtn");

// Modal controls
openModal.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Save favorite team using localStorage
saveTeamBtn.addEventListener("click", () => {
    const team = prompt("Enter your favorite football team:");
    if (team) {
        localStorage.setItem("favTeam", team);
        alert(` ${team} saved as your favorite!`);
  }
});

// Show welcome message based on saved team
document.addEventListener("DOMContentLoaded", () => {
    const favTeam = localStorage.getItem("favTeam");
    if (favTeam) {
        document.querySelector(".banner").textContent = `⚽ Welcome back, ${favTeam} fan! ⚽`;
  }
});
