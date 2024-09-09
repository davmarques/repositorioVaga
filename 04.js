// a- 9
function proximoNumeroA() {
    let sequenciaA = [1, 3, 5, 7];
    let ultimoNumeroA = sequenciaA[sequenciaA.length - 1];
    let proximoNumeroA = ultimoNumeroA + 2; 
    console.log("A: " + proximoNumeroA);
}
proximoNumeroA();

// b- 128
function proximoNumeroB() {
    let sequenciaB = [2, 4, 8, 16, 32, 64];
    let ultimoNumeroB = sequenciaB[sequenciaB.length - 1];
    let proximoNumeroB = ultimoNumeroB * 2;  
    console.log("B: " + proximoNumeroB);
}
proximoNumeroB();

// c- 49
function proximoNumeroC() {
    let sequenciaC = [0, 1, 4, 9, 16, 25, 36];
    let indice = sequenciaC.length; 
    let proximoNumeroC = indice * indice; 
    console.log("C: " + proximoNumeroC);
}
proximoNumeroC();

// d- 100
function proximoNumeroD() {
    let sequenciaD = [4, 16, 36, 64];
    let proximoPar = 10; 
    let proximoNumeroD = proximoPar * proximoPar;  
    console.log("D: " + proximoNumeroD);
}
proximoNumeroD();

// e- 13
function fibonacci() {
    let sequenciaE = [1, 1, 2, 3, 5, 8];
    let ultimoNumeroE = sequenciaE[sequenciaE.length - 1];
    let penultimoNumero = sequenciaE[sequenciaE.length - 2];
    let proximoNumeroE = ultimoNumeroE + penultimoNumero;
    console.log("E: " + proximoNumeroE);
}
fibonacci();

// f- 20
function proximoNumeroF() {
    let sequenciaF = [2, 10, 12, 16, 17, 18, 19];
    let proximoNumeroF = sequenciaF[sequenciaF.length - 1] + 1;
    console.log("F: " + proximoNumeroF);
}
proximoNumeroF();