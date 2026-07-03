const lessonSwitchers = document.querySelectorAll("[data-lesson-switcher]");

lessonSwitchers.forEach((switcher) => {
  const tabs = Array.from(switcher.querySelectorAll("[data-lesson-tab]"));
  const panels = Array.from(switcher.querySelectorAll("[data-lesson-panel]"));

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.lessonTab;

      tabs.forEach((item) => {
        const isActive = item === tab;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-selected", String(isActive));
      });

      panels.forEach((panel) => {
        const isActive = panel.dataset.lessonPanel === target;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    });
  });
});

const flowerForm = document.querySelector("[data-flower-form]");

if (flowerForm) {
  flowerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = flowerForm.querySelector("[data-flower-status]");
    if (status) {
      status.textContent = "送信ありがとうございます。空き日程を確認し、折り返しご連絡します。";
    }
    flowerForm.reset();
  });
}
