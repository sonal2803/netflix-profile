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
   6) MAKE BROWSER BACK / FORWARD BUTTON WORK FOR SCROLL
========================================================= */

// Observe scrolling to update URL hash automatically
const sections = document.querySelectorAll("section[id]");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                history.replaceState(null, "", `#${entry.target.id}`);
            }
        });
    },
    { threshold: 0.6 }
);

sections.forEach(section => observer.observe(section));
window.addEventListener("hashchange", () => {
    const target = document.querySelector(location.hash);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
});
