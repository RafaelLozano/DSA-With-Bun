# Árboles (Trees)

Los árboles son estructuras de datos jerárquicas no lineales que consisten en nodos conectados por aristas. Cada árbol tiene un nodo raíz y cada nodo puede tener cero o más nodos hijos.

## Características Principales

- **Nodo raíz**: El nodo superior del árbol (no tiene padre)
- **Nodos internos**: Nodos que tienen al menos un hijo
- **Nodos hoja**: Nodos que no tienen hijos
- **Altura**: Longitud del camino más largo desde la raíz hasta una hoja
- **Profundidad**: Longitud del camino desde la raíz hasta un nodo específico
- **Grado**: Número máximo de hijos que puede tener un nodo

## Tipos de Árboles

### 1. Árbol Binario
- Cada nodo tiene como máximo 2 hijos (izquierdo y derecho)
- **Árbol Binario de Búsqueda (BST)**: Para cada nodo, todos los valores del subárbol izquierdo son menores y los del derecho son mayores

### 2. Árbol AVL
- Árbol binario de búsqueda balanceado
- La diferencia de alturas entre subárboles izquierdo y derecho no excede 1

### 3. Árbol Rojo-Negro
- Árbol binario de búsqueda auto-balanceado
- Garantiza O(log n) para operaciones de búsqueda, inserción y eliminación

### 4. Árbol B
- Árbol de búsqueda balanceado con múltiples hijos por nodo
- Comúnmente usado en bases de datos

## Recorridos (Traversals)

### Recorrido en Profundidad (DFS)
1. **Preorden**: Raíz → Izquierdo → Derecho
2. **Inorden**: Izquierdo → Raíz → Derecho (en BST da valores ordenados)
3. **Postorden**: Izquierdo → Derecho → Raíz

### Recorrido en Anchura (BFS)
- Nivel por nivel, de izquierda a derecha
- Usa una cola (queue) para mantener el orden

## Operaciones Comunes

- **Búsqueda**: O(log n) en BST balanceado, O(n) en el peor caso
- **Inserción**: O(log n) en BST balanceado
- **Eliminación**: O(log n) en BST balanceado
- **Recorrido**: O(n) para visitar todos los nodos

## Aplicaciones

- Sistemas de archivos
- Estructuras de datos de bases de datos
- Algoritmos de compresión (Huffman)
- Parsing de expresiones
- Algoritmos de búsqueda y ordenamiento
- Estructuras de datos para IA (decision trees)

## Complejidad Temporal

| Operación | BST Balanceado | BST Desbalanceado |
|-----------|----------------|-------------------|
| Búsqueda  | O(log n)       | O(n)              |
| Inserción | O(log n)       | O(n)              |
| Eliminación | O(log n)     | O(n)              |
| Recorrido | O(n)          | O(n)              |

## Ventajas y Desventajas

### Ventajas
- Búsqueda eficiente en BST balanceados
- Estructura jerárquica natural
- Fácil de implementar y entender
- Soporte para operaciones de rango

### Desventajas
- Puede desbalancearse fácilmente
- No garantiza O(log n) sin balanceo
- Más complejo que arrays para operaciones simples
