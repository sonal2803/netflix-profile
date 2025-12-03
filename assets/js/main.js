/* =========================================================
   1) PROFILE SCREEN → MAIN PAGE TRANSITION
========================================================= */

document.getElementById("sonalProfile").addEventListener("click", () => {

    document.body.classList.remove("profile-active");

    document.getElementById("profile-screen").style.display = "none";

    const main = document.getElementById("main-home");
    main.style.display = "block";
    main.style.height = "auto";
    main.style.overflow = "visible";
});


/* =========================================================
   2) EXPERIENCE CAROUSEL SCROLL
========================================================= */

function scrollExperience(amount) {
    document.getElementById("experienceRow").scrollBy({
        left: amount,
        behavior: "smooth"
    });
}


/* =========================================================
   3) EXPERIENCE MODAL — OPEN HANDLER
========================================================= */

const expModal = document.getElementById("experienceModal");
const expClose = document.querySelector(".exp-modal-close");

// BOTH card + button open modal because both have .exp-open-modal
document.querySelectorAll(".exp-open-modal").forEach(trigger => {

    trigger.addEventListener("click", (e) => {

        const card = trigger.closest(".experience-card");

        document.getElementById("expModalTitle").innerHTML = card.dataset.title;
        document.getElementById("expModalPeriod").innerHTML = card.dataset.period;
        document.getElementById("expModalLocation").innerHTML = card.dataset.location;
        document.getElementById("expModalMode").innerHTML = card.dataset.mode;
        document.getElementById("expModalDescription").innerHTML = card.dataset.description;

        const certBtn = document.getElementById("expModalCertificate");
        if (card.dataset.certificate) {
            certBtn.href = card.dataset.certificate;
            certBtn.style.display = "inline-block";
        } else {
            certBtn.style.display = "none";
        }

        expModal.classList.add("active");
    });
});

expClose.onclick = () => expModal.classList.remove("active");

window.addEventListener("click", (event) => {
    if (event.target === expModal) expModal.classList.remove("active");
});
/* =========================================================
   4) PROJECT MODAL — OPEN HANDLER
========================================================= */

const projectModal = document.getElementById("projectModal");
const projectClose = document.querySelector(".modal-close");

document.querySelectorAll(".open-modal").forEach(btn => {
    btn.addEventListener("click", () => {
        
        const card = btn.closest(".project-card");

        document.getElementById("modalTitle").innerText = card.dataset.title;
        document.getElementById("modalPeriod").innerText = card.dataset.period;
        document.getElementById("modalLocation").innerText = card.dataset.location;
        document.getElementById("modalMode").innerText = card.dataset.mode;
        document.getElementById("modalDescription").innerText = card.dataset.description;
        document.getElementById("modalGithub").href = card.dataset.github;

        projectModal.classList.add("active");
    });
});

projectClose.onclick = () => projectModal.classList.remove("active");

window.addEventListener("click", (event) => {
    if (event.target === projectModal) projectModal.classList.remove("active");
});
