document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('button');
    
    let currentInput = '';
    let previousInput = '';
    let operation = null;
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            
            if (button.classList.contains('number') || button.classList.contains('decimal')) {
                // Prevent multiple decimal points
                if (value === '.' && currentInput.includes('.')) return;
                currentInput += value;
                result.value = currentInput;
            }
            
            else if (button.classList.contains('operator')) {
                if (currentInput !== '') {
                    if (previousInput !== '') {
                        calculate();
                    }
                    operation = value;
                    previousInput = currentInput;
                    currentInput = '';
                }
            }
            
            else if (button.classList.contains('equals')) {
                calculate();
            }
            
            else if (button.classList.contains('clear')) {
                clear();
            }
        });
    });
    
    function calculate() {
        if (previousInput === '' || currentInput === '') return;
        
        let computation;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        
        switch (operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        
        currentInput = computation.toString();
        operation = null;
        previousInput = '';
        result.value = currentInput;
    }
    
    function clear() {
        currentInput = '';
        previousInput = '';
        operation = null;
        result.value = '';
    }
}); 