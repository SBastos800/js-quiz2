const correctAnswers = ['A', 'C', 'A', 'B', 'A', 'B', 'A', 'C', 'A', 'D'];
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const selectedAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    selectedAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]){
            score += 10;
        }      
    });
    console.log(score);
});






