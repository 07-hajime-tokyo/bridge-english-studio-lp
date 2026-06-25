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

const form = document.querySelector("[data-form]");
const statusText = document.querySelector("[data-form-status]");

if (form && statusText) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    statusText.textContent = "送信ありがとうございます。担当スタッフより日程確認のご連絡をします。";
    form.reset();
  });
}

const courseTabs = document.querySelectorAll("[data-course-tab]");
const coursePanels = document.querySelectorAll("[data-course-panel]");

courseTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.courseTab;

    courseTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    coursePanels.forEach((panel) => {
      const isActive = panel.dataset.coursePanel === target;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  });
});
