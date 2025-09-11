# 🐢🐇 Fast & Slow Pointers (Tortoise & Hare Algorithm)

El patrón **Fast & Slow Pointers** (también conocido como *Tortoise and Hare*) es una técnica muy útil en algoritmos para **detectar ciclos** o encontrar elementos repetidos en estructuras como *linked lists* o *arrays*.  

---

## 📌 ¿Qué es?
Consiste en usar dos punteros que avanzan a diferentes velocidades:
- **Slow pointer**: avanza paso por paso (1 en 1).
- **Fast pointer**: avanza más rápido (normalmente 2 en 2).

Si existe un **ciclo**, ambos punteros se encontrarán en algún momento.  
Si no existe ciclo, el puntero rápido llegará al final.

---

## ✅ ¿Cuándo usarlo?
Usa este patrón cuando:
1. Necesites **detectar un ciclo** en una estructura de datos.
2. Quieras **encontrar un duplicado** en un array sin usar memoria extra.
3. Tengas que trabajar con problemas de **pistas circulares, bucles o referencias repetitivas**.

Ejemplos típicos:
- Detección de ciclo en una **linked list**.
- Encontrar un **número duplicado** en un array de `[1..n]`.
- Problemas de **intersección** o **entrada a un ciclo**.

---

## 💡 Ejemplo 1: Detectar ciclo en Linked List
```ts
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;       // 1 paso
    fast = fast.next.next;  // 2 pasos

    if (slow === fast) {
      return true; // ciclo encontrado
    }
  }
  return false;
}
```

---

## 💡 Ejemplo 2: Encontrar duplicado en Array
Problema:  
Un array de tamaño `n+1` con valores entre `[1, n]`. Siempre hay un duplicado.  

Solución con Fast & Slow:
```ts
function findDuplicate(nums) {
  let slow = nums[0];
  let fast = nums[0];

  // 1. Detectar ciclo
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // 2. Encontrar la entrada al ciclo (el duplicado)
  fast = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}
```

---

## 🎯 Tips & Tricks
- **Recuerda**: El ciclo aparece porque un valor apunta a un índice ya visitado → generando un bucle.
- **Espacio O(1)**: Solo necesitas dos punteros, no estructuras adicionales.
- **Úsalo en entrevistas**: Muy común en Google, Meta, Amazon para detectar tu habilidad en DSA.
- **Visualízalo como una pista de carreras**: el conejo (fast) siempre alcanzará a la tortuga (slow) si hay un circuito cerrado.
- Si el problema menciona palabras como *ciclo*, *duplicado*, *loop*, *repetición*, probablemente sea buen momento para aplicar este patrón.

---

## 🚀 Conclusión
El patrón **Fast & Slow Pointers** es una técnica fundamental en algoritmos:
- Detecta ciclos eficientemente.
- Encuentra duplicados sin usar memoria extra.
- Aparece en muchísimos problemas clásicos de entrevistas.
