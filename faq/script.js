const faqQuestions = document.querySelectorAll('.faq-question');

console.log("test");

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('show-answer');
  });
});
