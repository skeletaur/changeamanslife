(function () {
  const config = window.SITE_CONFIG || {
    donateUrl: "#donate",
    contactEmail: "",
  };

  function initDonateLinks() {
    const url = config.donateUrl;
    const hasDonateLink = url && url.startsWith("http");

    const buttons = [
      document.getElementById("donate-btn-top"),
      document.getElementById("donate-btn-main"),
    ];
    const progressLink = document.getElementById("live-progress-link");
    const note = document.getElementById("donate-placeholder-note");

    buttons.forEach(function (btn) {
      if (!btn) return;
      if (hasDonateLink) {
        btn.href = url;
        btn.target = "_blank";
        btn.rel = "noopener noreferrer";
      } else {
        btn.href = "#give";
      }
    });

    if (progressLink && hasDonateLink) {
      progressLink.href = url;
      progressLink.target = "_blank";
      progressLink.rel = "noopener noreferrer";
    }

    if (note) {
      note.textContent = hasDonateLink
        ? "You'll be taken to GoFundMe to complete your donation."
        : "Donation link coming soon. Check back shortly.";
    }
  }

  function initContact() {
    const email = (config.contactEmail || "").trim();
    const link = document.getElementById("contact-email-link");
    const note = document.getElementById("contact-note");

    if (!link) return;

    if (email) {
      link.href = "mailto:" + email;
      link.textContent = email;
      link.classList.add("contact-link-active");
      if (note) note.hidden = true;
    } else {
      link.removeAttribute("href");
      link.classList.add("contact-link-pending");
    }
  }

  function initYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  initDonateLinks();
  initContact();
  initYear();
})();
