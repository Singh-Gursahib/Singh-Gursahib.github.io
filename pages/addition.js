const matrixSize = 3;

function createMatrixInput(parentId) {
  const parent = document.getElementById(parentId);
  for (let i = 0; i < matrixSize; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < matrixSize; j++) {
      const cell = document.createElement('td');
      const input = document.createElement('input');
      input.type = 'number';
      cell.appendChild(input);
      row.appendChild(cell);
    }
    parent.appendChild(row);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createMatrixInput('matrixA');
  createMatrixInput('matrixB');
  createMatrixInput('resultMatrix');
});

function clearInputValues(matrixId) {
    const matrix = document.getElementById(matrixId);
    matrix.querySelectorAll('input').forEach(input => input.value = '');
  }
  
  function clearMatrix(matrixId) {
    const matrix = document.getElementById(matrixId);
    while (matrix.firstChild) {
      matrix.removeChild(matrix.firstChild);
    }
  }

function flipMatrices() {
    const matrixA = document.getElementById('matrixA').querySelectorAll('input');
    const matrixB = document.getElementById('matrixB').querySelectorAll('input');

    for (let i = 0; i < matrixA.length; i++) {
        const temp = matrixA[i].value;
        matrixA[i].value = matrixB[i].value;
        matrixB[i].value = temp;
    }
}

function subtractMatrices() {
    performOperation((a, b) => a - b);
}

function addMatrices() {
    performOperation((a, b) => a + b);
}

function performOperation(operation) {
    const matrixA = document.getElementById('matrixA').querySelectorAll('input');
    const matrixB = document.getElementById('matrixB').querySelectorAll('input');
    const resultMatrix = document.getElementById('resultMatrix');
  
    clearMatrix('resultMatrix');
  
    let counter = 0;
    for (let i = 0; i < matrixSize; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < matrixSize; j++) {
        const aValue = parseFloat(matrixA[counter].value);
        const bValue = parseFloat(matrixB[counter].value);
  
        if (isNaN(aValue) || isNaN(bValue)) {
          alert('Please fill in all matrix cells with numbers.');
          clearMatrix('resultMatrix');
          return;
        }
  
        const result = operation(aValue, bValue);
        const input = document.createElement('input');
        input.type = 'number';
        input.value = result;
        input.readOnly = true;
  
        const cell = document.createElement('td');
        cell.appendChild(input);
        row.appendChild(cell);
  
        counter++;
      }
      resultMatrix.appendChild(row);
    }
  }
  
createMatrixInput('matrixA');
createMatrixInput('matrixB');
createMatrixInput('resultMatrix');          