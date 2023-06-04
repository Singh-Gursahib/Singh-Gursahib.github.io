function calculateRoots() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    const discriminant = b * b - 4 * a * c;
    const output = document.getElementById('output');

    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        output.innerHTML = `The roots are real and distinct: \n x = ${(-x1).toFixed(2)} or ${(-x2).toFixed(2)}`;
    } else if (discriminant === 0) {
        const x1 = -b / (2 * a);
        output.innerHTML = `The roots are real and equal: x = ${(-x1).toFixed(2)}`;
    } else {
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        output.innerHTML = `The roots are complex: \n x = ${realPart.toFixed(2)} + ${imaginaryPart.toFixed(2)}i or  ${realPart.toFixed(2)} - ${imaginaryPart.toFixed(2)}i`;
    }
}

function clearInputValues() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('output').innerHTML = '';
}
