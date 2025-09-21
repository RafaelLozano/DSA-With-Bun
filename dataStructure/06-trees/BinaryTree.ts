/**
 * Implementación de un Árbol Binario de Búsqueda (BST)
 * Incluye operaciones básicas y diferentes tipos de recorridos
 */

export class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  /**
   * Inserta un nuevo valor en el BST
   * Complejidad: O(log n) promedio, O(n) en el peor caso
   */
  insert(value: T): void {
    const newNode = new TreeNode(value);
    
    if (!this.root) {
      this.root = newNode;
      return;
    }

    this.insertNode(this.root, newNode);
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  /**
   * Busca un valor en el BST
   * Complejidad: O(log n) promedio, O(n) en el peor caso
   */
  search(value: T): boolean {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: TreeNode<T> | null, value: T): boolean {
    if (node === null) {
      return false;
    }

    if (value === node.value) {
      return true;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

  /**
   * Elimina un valor del BST
   * Complejidad: O(log n) promedio, O(n) en el peor caso
   */
  delete(value: T): boolean {
    if (!this.root) return false;
    
    this.root = this.deleteNode(this.root, value);
    return true;
  }

  private deleteNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // Nodo encontrado
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Nodo con dos hijos: encontrar el sucesor inorden
      const successor = this.findMinNode(node.right);
      node.value = successor.value;
      node.right = this.deleteNode(node.right, successor.value);
    }

    return node;
  }

  private findMinNode(node: TreeNode<T>): TreeNode<T> {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  /**
   * Recorrido en Preorden: Raíz → Izquierdo → Derecho
   * Complejidad: O(n)
   */
  preorderTraversal(): T[] {
    const result: T[] = [];
    this.preorderHelper(this.root, result);
    return result;
  }

  private preorderHelper(node: TreeNode<T> | null, result: T[]): void {
    if (node) {
      result.push(node.value);
      this.preorderHelper(node.left, result);
      this.preorderHelper(node.right, result);
    }
  }

  /**
   * Recorrido en Inorden: Izquierdo → Raíz → Derecho
   * En BST produce valores ordenados
   * Complejidad: O(n)
   */
  inorderTraversal(): T[] {
    const result: T[] = [];
    this.inorderHelper(this.root, result);
    return result;
  }

  private inorderHelper(node: TreeNode<T> | null, result: T[]): void {
    if (node) {
      this.inorderHelper(node.left, result);
      result.push(node.value);
      this.inorderHelper(node.right, result);
    }
  }

  /**
   * Recorrido en Postorden: Izquierdo → Derecho → Raíz
   * Complejidad: O(n)
   */
  postorderTraversal(): T[] {
    const result: T[] = [];
    this.postorderHelper(this.root, result);
    return result;
  }

  private postorderHelper(node: TreeNode<T> | null, result: T[]): void {
    if (node) {
      this.postorderHelper(node.left, result);
      this.postorderHelper(node.right, result);
      result.push(node.value);
    }
  }

  /**
   * Recorrido en Anchura (BFS): Nivel por nivel
   * Complejidad: O(n)
   */
  breadthFirstTraversal(): T[] {
    if (!this.root) return [];

    const result: T[] = [];
    const queue: TreeNode<T>[] = [this.root];

    while (queue.length > 0) {
      const node = queue.shift()!;
      result.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }

  /**
   * Calcula la altura del árbol
   * Complejidad: O(n)
   */
  height(): number {
    return this.calculateHeight(this.root);
  }

  private calculateHeight(node: TreeNode<T> | null): number {
    if (!node) return -1;

    const leftHeight = this.calculateHeight(node.left);
    const rightHeight = this.calculateHeight(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  /**
   * Verifica si el árbol está balanceado
   * Complejidad: O(n)
   */
  isBalanced(): boolean {
    return this.checkBalance(this.root) !== -1;
  }

  private checkBalance(node: TreeNode<T> | null): number {
    if (!node) return 0;

    const leftHeight = this.checkBalance(node.left);
    if (leftHeight === -1) return -1;

    const rightHeight = this.checkBalance(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    return Math.max(leftHeight, rightHeight) + 1;
  }

  /**
   * Encuentra el valor mínimo en el BST
   * Complejidad: O(log n) promedio, O(n) en el peor caso
   */
  findMin(): T | null {
    if (!this.root) return null;
    return this.findMinNode(this.root).value;
  }

  /**
   * Encuentra el valor máximo en el BST
   * Complejidad: O(log n) promedio, O(n) en el peor caso
   */
  findMax(): T | null {
    if (!this.root) return null;
    
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.value;
  }

  /**
   * Verifica si el árbol está vacío
   */
  isEmpty(): boolean {
    return this.root === null;
  }

  /**
   * Obtiene el tamaño del árbol (número de nodos)
   * Complejidad: O(n)
   */
  size(): number {
    return this.countNodes(this.root);
  }

  private countNodes(node: TreeNode<T> | null): number {
    if (!node) return 0;
    return 1 + this.countNodes(node.left) + this.countNodes(node.right);
  }

  /**
   * Imprime el árbol de forma visual (para debugging)
   */
  printTree(): void {
    this.printNode(this.root, 0);
  }

  private printNode(node: TreeNode<T> | null, depth: number): void {
    if (!node) return;

    const indent = "  ".repeat(depth);
    console.log(`${indent}${node.value}`);
    
    this.printNode(node.left, depth + 1);
    this.printNode(node.right, depth + 1);
  }
}

// Ejemplo de uso
export function demonstrateBinaryTree(): void {
  console.log("🌳 Demostración de Árbol Binario de Búsqueda\n");

  const bst = new BinarySearchTree<number>();

  // Insertar valores
  const values = [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45];
  console.log("Insertando valores:", values);
  values.forEach(value => bst.insert(value));

  console.log("\n📊 Información del árbol:");
  console.log(`Altura: ${bst.height()}`);
  console.log(`Tamaño: ${bst.size()}`);
  console.log(`Balanceado: ${bst.isBalanced()}`);
  console.log(`Mínimo: ${bst.findMin()}`);
  console.log(`Máximo: ${bst.findMax()}`);

  console.log("\n🔍 Búsquedas:");
  console.log(`¿Existe 40? ${bst.search(40)}`);
  console.log(`¿Existe 100? ${bst.search(100)}`);

  console.log("\n🚶‍♂️ Recorridos:");
  console.log(`Preorden: ${bst.preorderTraversal()}`);
  console.log(`Inorden: ${bst.inorderTraversal()}`);
  console.log(`Postorden: ${bst.postorderTraversal()}`);
  console.log(`BFS: ${bst.breadthFirstTraversal()}`);

  console.log("\n🌳 Estructura del árbol:");
  bst.printTree();

  console.log("\n🗑️ Eliminando el valor 30:");
  bst.delete(30);
  console.log(`Inorden después de eliminar 30: ${bst.inorderTraversal()}`);
}
