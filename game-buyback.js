const stepCards = document.querySelectorAll(".step-card");

const revealSteps = () => {
  stepCards.forEach((card) => card.classList.add("is-visible"));
};

if ("IntersectionObserver" in window && stepCards.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealSteps();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.28 }
  );

  observer.observe(stepCards[0]);
} else {
  revealSteps();
}

const itemTabs = document.querySelectorAll("[data-item-tab]");
const itemPanels = document.querySelectorAll("[data-item-panel]");

itemTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.itemTab;

    itemTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    itemPanels.forEach((panel) => {
      const isActive = panel.dataset.itemPanel === target;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  });
});

const form = document.querySelector("[data-form]");
const statusText = document.querySelector("[data-form-status]");

if (form && statusText) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    statusText.textContent = "査定申し込みありがとうございます。担当スタッフより確認のご連絡をします。";
    form.reset();
  });
}
