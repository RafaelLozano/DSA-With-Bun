/*
Contexto

Trabajas en un hotel que tiene un sistema IoT con sensores de temperatura (ESP32 + termopar).
Cada sensor:
- Envía la temperatura cada 10 segundos a tu backend en Node.js vía HTTP/MQTT.
- El backend guarda los datos en MongoDB.
De pronto, varios dispositivos comienzan a fallar y reportan lecturas cíclicas:
22.5 → 25.0 → 22.5 → 25.0 → 22.5 → 25.0 …
Esto pasa porque el relé de la resistencia enciende y apaga demasiado rápido (histéresis mal calibrada), provocando un ciclo infinito de sube/baja.

Debes detectar automáticamente ese ciclo de valores en tiempo real usando el patrón Fast & Slow Pointers para:
Identificar que el sensor cayó en un loop oscilatorio.
Reportar una alerta (console.warn o guardar en MongoDB).
Hacerlo en O(1) memoria, ya que tu servidor recibe miles de sensores y no puedes guardar todo el histórico.
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
        return true;
    }

    return false;
       
    
}