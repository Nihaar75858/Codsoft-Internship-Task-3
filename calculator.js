
document.addEventListener("DOMContentLoaded", function() {
    var number = document.querySelectorAll('.number');
    var symbol = document.querySelectorAll('.symbol');
    var output = document.getElementById("output-bar");

    var clear = document.querySelector('.clear');

    output.addEventListener("input", function() {
        if (output.innerHTML.trim() === "0") {
            output.innerHTML = " ";
        }
    })

    number.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            var digit = parseInt(button.getAttribute('data-value'));
            if(output.innerText === "0") {
                output.innerHTML = " ";
            }
            output.innerHTML += digit;
        });
    });

    symbol.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            var operator = button.getAttribute('data-value');
            if (operator === '=') {
                try {
                    var expression = output.innerHTML.replace(/X/, '*').replace(/÷/g, "/");
                    output.innerHTML = eval(expression);
                } catch(error) {
                    output.innerHTML = 'Error';
                }
            } else if(operator==='(') {
                if (output.innerHTML.slice(0) === '0') {
                    output.innerHTML = output.innerHTML.replace('0', ' ');
                }
                output.innerHTML += operator;
            } else {
                output.innerHTML += operator;
            }
        });
    });

    clear.addEventListener("click", function(event) {
        event.preventDefault();
        output.innerText = "0";
    })
    
});
