// comece a criar a sua função add na linha abaixo
function add(x,y){
    return x + y
}


// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(x,y){
    let resultado = 0;
    for(i = 0;i < y;i++){
        resultado = add(resultado,x)
    }
    return resultado
}
console.log(multiply(3,3))

// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
 function power (x,n){
    let resultado = 1;
    for(let i = 0; i < n;i++){
        resultado = multiply(resultado,x)
    }
    return resultado
 }
 console.log(power(3,4))

// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(x){
    resultado = 1;
    for(let i = x; i > 0; i--){
        resultado = multiply(resultado,i)
    }
    return resultado
}
console.log(factorial(5))
// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(n){
    
    let resultado = [0,1];
    
    let anterior = 0;
    let atual = 1;
    let proximo = n;

    for(i = 2; i <= n; i++){
        proximo = add(anterior,atual);
        anterior = atual
        atual = proximo

        resultado.push(proximo)       
       
    } 
    return resultado
}
console.log(fibonacci(7))

// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');