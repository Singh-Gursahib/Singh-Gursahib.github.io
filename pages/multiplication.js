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

function getInputValues(matrixId) {
  const matrix = document.getElementById(matrixId);
  const inputs = matrix.querySelectorAll('input');
  const values = [];

  for (let i = 0; i < matrixSize; i++) {
    const row = [];
    for (let j = 0; j < matrixSize; j++) {
      row.push(parseFloat(inputs[i * matrixSize + j].value));
    }
    values.push(row);
  }

  return values;
}

function displayMatrix(matrixId, matrix) {
  const resultMatrix = document.getElementById(matrixId);
  while (resultMatrix.firstChild) {
    resultMatrix.removeChild(resultMatrix.firstChild);
  }

  for (const row of matrix) {
    const tr = document.createElement('tr');
    for (const value of row) {
      const td = document.createElement('td');
      const input = document.createElement('input');
      input.type = 'number';
      input.value = value;
      input.readOnly = true;
      td.appendChild(input);
      tr.appendChild(td);
    }
    resultMatrix.appendChild(tr);
  }
}

function multiplyMatrices(order) {
    const matrixA = getInputValues('matrixA');
    const matrixB = getInputValues('matrixB');
  
    let resultMatrix;
    if (order === 'AxB') {
      resultMatrix = multiply(matrixA, matrixB);
    } else if (order === 'BxA') {
      resultMatrix = multiply(matrixB, matrixA);
    } else {
      alert('Invalid matrix multiplication order');
      return;
    }
  
    if (resultMatrix) {
      displayMatrix('resultMatrix', resultMatrix);
    }
  }
  

  function multiply(a, b) {
    const rowsA = a.length;
    const colsA = a[0].length;
    const rowsB = b.length;
    const colsB = b[0].length;
  
    if (colsA !== rowsB) {
      alert('Cannot multiply these matrices. The number of columns in the first matrix must be equal to the number of rows in the second matrix.');
      return;
    }
  
    const resultMatrix = [];
    for (let i = 0; i < rowsA; i++) {
      resultMatrix[i] = [];
      for (let j = 0; j < colsB; j++) {
        resultMatrix[i][j] = 0;
        for (let k = 0; k < colsA; k++) {
          resultMatrix[i][j] += a[i][k] * b[k][j];
        }
      }
    }
  
    return resultMatrix;
  }
  
  
  