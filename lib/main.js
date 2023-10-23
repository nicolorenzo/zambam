'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var accordion = document.querySelectorAll('ul.accordion li');

  var initAccordion = function initAccordion(element) {
    element.addEventListener('click', toggleAccordion);

    function toggleAccordion() {
      if (element.classList.contains('active')) {
        element.classList.remove('active');
      } else {
        accordion.forEach(function (element) {
          return element.classList.remove('active');
        });
        element.classList.add('active');
      }
    }
  };
  accordion.forEach(initAccordion);
});