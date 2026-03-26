# 2) Linked Lists  

## 🚀 Qué son  
Una **Linked List** es una estructura lineal compuesta de nodos, donde cada nodo tiene:  
- **Valor (data)**  
- **Referencia (puntero)** al siguiente nodo  

Ejemplo visual (lista simple):  

```
[10 | next] → [20 | next] → [30 | next] → null
```

### Variantes
- **Singly Linked List**: cada nodo apunta solo al siguiente.  
- **Doubly Linked List**: cada nodo apunta al siguiente y al anterior.  
- **Circular Linked List**: el último nodo apunta de vuelta al primero.  

---

## 🧮 Complejidad de operaciones
| Operación                | Array       | Linked List |
|---------------------------|------------|-------------|
| Acceso por índice         | O(1)       | ❌ O(n)     |
| Insertar/eliminar inicio  | O(n)       | ✅ O(1)     |
| Insertar/eliminar final   | O(1) (si se conoce tail) | O(1) |
| Búsqueda por valor        | O(n)       | O(n)        |

👉 Usamos linked list cuando **necesitamos muchas inserciones/eliminaciones** y **no tanto acceso aleatorio**.

---

## ⚡ Implementación mínima en TypeScript
```ts
// Nodo básico
class ListNode<T> {
  constructor(
    public val: T,
    public next: ListNode<T> | null = null
  ) {}
}

// Función para imprimir la lista
function printList<T>(head: ListNode<T> | null) {
  let cur = head;
  const values: T[] = [];
  while (cur) {
    values.push(cur.val);
    cur = cur.next;
  }
  console.log(values.join(" -> "));
}

// Crear lista: 1 -> 2 -> 3
const head = new ListNode(1, new ListNode(2, new ListNode(3)));
printList(head); // 1 -> 2 -> 3
```

---

## 🧩 Problemas clásicos de entrevistas

### 1. Revertir una lista
```ts
function reverseList<T>(head: ListNode<T> | null): ListNode<T> | null {
  let prev: ListNode<T> | null = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}
```

### 2. Detectar ciclo (Floyd’s Fast & Slow Pointers)
```ts
function hasCycle<T>(head: ListNode<T> | null): boolean {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
```

### 3. Encontrar el nodo medio
```ts
function middleNode<T>(head: ListNode<T> | null): ListNode<T> | null {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  return slow;
}
```

---

## 💡 Tips & Tricks
- Usa un **dummy head** para simplificar operaciones (no lidiar con `null` inicial).  
- Cuando hagas `reverse`, siempre guarda `next` ANTES de reasignar.  
- Floyd (fast/slow pointers) es **patrón obligatorio**: detectar ciclos, nodo medio, etc.  

---

## ❌ Errores comunes
- Olvidar actualizar `next` y perder parte de la lista.  
- Crear bucles infinitos por reasignar mal punteros.  
- Acceder a `head.next.next` sin verificar `null`.  

---

## 📌 Ejercicios recomendados
- Revertir lista (`reverse linked list`)  
- Detectar ciclo (`linked list cycle`)  
- Palíndromo en lista (`palindrome linked list`)  
- Merge de dos listas ordenadas (`merge two sorted lists`)  
- Eliminar el n-ésimo nodo desde el final (`remove nth node from end of list`)  
