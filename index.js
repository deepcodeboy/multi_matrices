const express = require('express');
const app = express();
const port = 4000;

const matrix1 = [
    [1, 2],
    [3, 4],
  ];
  
  const matrix2 = [
    [5, 6],
    [7, 8],
  ];
  
  if (matrix1[0].length !== matrix2.length) {
    console.log("No se pueden multiplicar las matrices");
    return;
  } else {
    const result = [];
  
    for (let i = 0; i < matrix1.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrix2[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < matrix1[0].length; k++) {
          sum += matrix1[i][k] * matrix2[k][j];
        }
        result[i][j] = sum;
      }
    }
    console.log(result);

  }
  
  
  
  

app.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`))