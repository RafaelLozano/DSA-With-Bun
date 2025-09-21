/*
Dado un array nextBike donde nextBike[i] indica a qué bicicleta apunta la bicicleta i, detecta si existe un ciclo.
Si existe, devuelve el ID donde empieza el ciclo.
Si no hay ciclo, devuelve -1.
*/

export const detectCycle = (readings: number[]) => {
    let slow = 0;
    let fast = 0;

    while(fast < readings.length && fast + 1 < readings.length){
        if(readings[slow] === readings[fast]){
            return true;
        }
        slow++;
        fast += 2;
    }

    if(readings[slow] === readings[fast]){
        return slow;
    }

    return -1;
       
    
}