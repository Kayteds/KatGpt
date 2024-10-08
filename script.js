
function typeWriter(elementId, text, speed){
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {

            document.getElementById('typing-indicator').style.display = 'none';
        }
        
    }
    
    type();
}

window.onload = function() {
const message = 'o sentido da vida é algo complexo e relativo. mas, para Kate, o sentido da vida tem 7 letras, olhos castanhos claros e 1,73 de altura.';
const speed = 50;

    document.getElementById('typing-indicator').style.display = 'block';

    typeWriter('chat-box', message, speed);
};


    document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const query = document.getElementById('search-input').value;
    console.log(`Você pesquisou por: ${query}`);
});