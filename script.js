let buttons = document.querySelectorAll('.button');
let string = '';
let input = document.querySelector('#inputBox');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case '=':
                if (string !== null) {
                    try {
                        string = eval(string);
                        input.value = string;
                    } catch (error) {
                        input.value = 'Error';
                        string = '';
                    }
                }
                break;
            case 'AC':
                string = '';
                input.value = string;
                break;
            case 'DEL':
                if (string.length > 0) {
                    string = string.slice(0, string.length - 1);
                } else {
                    string = input.value.slice(0, input.value.length - 1);
                }
                input.value = string;
                break;
            default:
                string += e.target.innerText;
                input.value = string;
        }
    });
});