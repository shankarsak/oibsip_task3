const calculateTemp = () => {

    const numberTemp = document.getElementById('input').value;

    const tempSelected = document.getElementById('typeto');
    const valueTemp = typeto.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = (cel * 9/5) + 32;
        return fahrenheit;
    }

    const celToCel = (fah) => {
        let celsius = (fah -32) *5/9;
        return celsius;
    }

    let result;

    if(valueTemp == 'fahrenheit'){
        result = celToFah(numberTemp);
        document.getElementById('output').value = result.toFixed(2) + ' °F';
    }
    else if(valueTemp == 'celsius'){
        result = celToCel(numberTemp);
        document.getElementById('output').value = result.toFixed(2) + ' °C';
    }
}
document.getElementById('clear').onclick = clearForm;
function clearForm() {
    document.getElementById('input').value = '';
    document.getElementById('typeto').value = '';
    document.getElementById('output').value = '';
} 