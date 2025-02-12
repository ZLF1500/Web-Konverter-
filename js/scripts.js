function convertNumber() {
    let inputNumber = document.getElementById('inputNumber').value;
    let inputType = document.getElementById('inputType').value;
    let outputType = document.getElementById('outputType').value;
    
    let decimalValue;
    
    // Convert input to decimal
    switch(inputType) {
        case 'binary':
            decimalValue = parseInt(inputNumber, 2);
            break;
        case 'decimal':
            decimalValue = parseInt(inputNumber, 10);
            break;
        case 'octal':
            decimalValue = parseInt(inputNumber, 8);
            break;
        case 'hexadecimal':
            decimalValue = parseInt(inputNumber, 16);
            break;
    }
    
    let result;
    
    // Convert decimal to desired output
    switch(outputType) {
        case 'binary':
            result = decimalValue.toString(2);
            break;
        case 'decimal':
            result = decimalValue.toString(10);
            break;
        case 'octal':
            result = decimalValue.toString(8);
            break;
        case 'hexadecimal':
            result = decimalValue.toString(16).toUpperCase();
            break;
    }
    
    document.getElementById('result').innerText = `Hasil: ${result}`;
}
