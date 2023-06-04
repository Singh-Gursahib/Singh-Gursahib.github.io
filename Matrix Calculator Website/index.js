const form = document.querySelector('form');
const matrixResult = document.getElementById('matrixResult');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const matrixA = parseMatrix(document.getElementById('matrixA').value);
  const matrixB = parseMatrix(document.getElementById('matrixB').value);
  
  const result = multiplyMatrices(matrixA, matrixB);
  
  matrixResult.value = stringifyMatrix(result);
});

function parseMatrix(matrixString) {
  const rows = matrixString.trim().split('\n');
  
  return rows.map(row => row.trim().split(/\s+/).map(cell => Number(cell)));
}

function multiplyMatrices(matrixA, matrixB) {
  const result = [];

  for (let i = 0; i < matrixA.length; i++) {
    result[i] = [];

    for (let j = 0; j < matrixB[0].length; j++) {
      let sum = 0;

      for (let k = 0; k < matrixB.length; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }

      result[i][j] = sum;
    }
  }

  return result;
}

function stringifyMatrix(matrix) {
  return matrix.map(row => row.join('\t')).join('\n');
}