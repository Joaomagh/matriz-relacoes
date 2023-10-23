
let matriz = [
    [1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 0, 1]
];

// Função para verificar se a relação é reflexiva
function reflexiva(matriz) {
    for(let i = 0; i < matriz.length; i++) {
        if(matriz[i][i] !== 1) {
            return false;
        }
    }
    return true;
}

// Função para verificar se a relação é simétrica
function simetrica(matriz) {
    for(let i = 0; i < matriz.length; i++) {
        for(let j = i+1; j < matriz.length; j++) {
            if(matriz[i][j] !== matriz[j][i]) {
                return false;
            }
        }
    }
    return true;
}

// Função para verificar se a relação é antissimétrica
function antisimetrica(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = i + 1; j < matriz.length; j++) {
            if (matriz[i][j] === 1 && matriz[j][i] === 1) {
                return false;
            }
        }
    }
    return true;
}

// Função para verificar se a relação é assimétrica
function assimetrica(matriz) {
    for(let i = 0; i < matriz.length; i++) {
        for(let j = i+1; j < matriz.length; j++) {
            if(matriz[i][j] === matriz[j][i] && matriz[i][j] === 1) {
                return false;
            }
        }
    }
    return !simetrica(matriz);
}


// Função para verificar se a relação é transitiva
function transitiva(matriz) {
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz.length; j++) {
            for(let k = 0; k < matriz.length; k++) {
                if(matriz[i][j] === 1 && matriz[j][k] === 1 && matriz[i][k] !== 1) {
                    return false;
                }
            }
        }
    }
    return true;
}


console.log("Reflexiva: " + reflexiva(matriz));
console.log("Simétrica: " + simetrica(matriz));
console.log("Antissimétrica: " + antisimetrica(matriz));
console.log("Assimétrica: " + assimetrica(matriz));
console.log("Transitiva: " + transitiva(matriz));

  
/*  [1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 0, 1]
    */ 

/*
    [1, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 1],
    [0, 1, 0, 1, 1, 1],
*/