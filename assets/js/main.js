/* =========================================================
   AZARIAH CHRISTIAN COLLEGE
   Main site interactions
   ========================================================= */

"use strict";

/* ---------------------------------------------------------
   1. Footer year
   --------------------------------------------------------- */
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* ---------------------------------------------------------
   2. Scroll reveal animations
   --------------------------------------------------------- */
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
} else {
    // Older browsers: show the content without scroll animations.
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });
}

/* ---------------------------------------------------------
   3. Back-to-top button
   --------------------------------------------------------- */
const backToTopButton = document.querySelector(".back-top");

if (backToTopButton) {
    window.addEventListener("scroll", () => {
        backToTopButton.classList.toggle("show", window.scrollY > 400);
    });

    backToTopButton.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/* ---------------------------------------------------------
   4. Close mobile navigation after selecting a page
   --------------------------------------------------------- */
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        const navigationMenu = document.querySelector(".navbar-collapse");

        if (
            navigationMenu &&
            navigationMenu.classList.contains("show") &&
            window.bootstrap
        ) {
            window.bootstrap.Collapse
                .getOrCreateInstance(navigationMenu)
                .hide();
        }
    });
});

/* ---------------------------------------------------------
   5. Homepage enquiry form
   Opens WhatsApp with the visitor's details.
   The visitor must press Send in WhatsApp.
   --------------------------------------------------------- */
const enquiryForm = document.getElementById("enquiryForm");
const schoolWhatsAppNumber = "263782170226";

if (enquiryForm) {
    enquiryForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const parentName = document.getElementById("enq-name")?.value.trim() || "";
        const email = document.getElementById("enq-email")?.value.trim() || "";
        const phone = document.getElementById("enq-phone")?.value.trim() || "";
        const formApplyingFor = document.getElementById("enq-form")?.value || "";
        const enquiry = document.getElementById("enq-message")?.value.trim() || "";

        const message = [
            "Hello Azariah Christian College,",
            "",
            "I would like to make an enquiry.",
            "",
            `Parent / Guardian: ${parentName}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `Form applying for: ${formApplyingFor || "Not specified"}`,
            `Enquiry: ${enquiry || "No additional message"}`
        ].join("\n");

        const whatsappURL =
            `https://wa.me/${schoolWhatsAppNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
}

/* ---------------------------------------------------------
   6. Online entrance test links
   Paste the entrance test website address between the quotes
   below. Every "Take the entrance test" button uses it.
   Example: "https://yourname.pythonanywhere.com/"
   --------------------------------------------------------- */
const entranceTestURL = "https://azariah1.pythonanywhere.com/";

document.querySelectorAll("[data-entrance-test]").forEach((link) => {
    if (entranceTestURL) {
        link.setAttribute("href", entranceTestURL);
    } else {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            alert("The online entrance test will open here soon. Please contact admissions for assistance.");
        });
    }
});
