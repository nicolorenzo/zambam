document.addEventListener('DOMContentLoaded', () => {
  const accordion = document.querySelectorAll('ul.accordion li');

  const initAccordion = (element) => {
    element.addEventListener('click', toggleAccordion);

    function toggleAccordion() {
      if (element.classList.contains('active')) {
        element.classList.remove('active');
      } else {
        accordion.forEach((element) => element.classList.remove('active'));
        element.classList.add('active');
      }
    }
  };
  accordion.forEach(initAccordion);
});
