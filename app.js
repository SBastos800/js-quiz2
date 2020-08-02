const correctAnswers = ['A', 'C', 'A', 'B', 'A', 'B', 'A', 'C', 'A', 'D'];
const form = document.querySelector('form');
const result = document.querySelector('span');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const selectedAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    selectedAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]){
            score += 10;
        }  
    });
    scrollTo(0,0);
    // console.log(score);
    
    let output = 0;
    const progressingBar = setInterval(() => {
        result.textContent = `${output}`;
        if(output === score) {
            clearInterval(progressingBar);
        } else {
            output ++;
        }
        
    }, 10);

      
    function move() {
        if (score === 0) {
            score = 1;
            var elem = document.getElementById("myBar");
            // var width = 0;
            var id = setInterval(frame, 0);
            function frame() {
            if (output === score) {
                clearInterval(id);
                // score = 0;
            } else {
                score++;
                elem.style.score = score + "%";
                elem.innerHTML = score + "%";
            }
            }
        }
    }

    move(score);
  
});














