function identificarLampadas() {
    let lampadas = [false, false, false];
    let interruptores = [false, false, false];

    interruptores[0] = true;
    interruptores[0] = false;
    interruptores[1] = true;

    lampadas[0] = interruptores[0];
    lampadas[1] = interruptores[1];
    lampadas[2] = interruptores[2];

    console.log("Lâmpada 1 está " + (lampadas[0] ? "acesa" : "apagada") + "."); 
    console.log("Lâmpada 2 está " + (lampadas[1] ? "acesa" : "apagada") + ".");
    console.log("Lâmpada 3 está " + (lampadas[2] ? "acesa" : "apagada") + ".");
    console.log("____________________________________")
    console.log("Interruptor 0 controla a lâmpada 1.");
    console.log("Interruptor 1 controla a lâmpada 2.");
    console.log("Interruptor 2 controla a lâmpada 3.");
}

identificarLampadas();
