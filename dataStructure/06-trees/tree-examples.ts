/**
 * Ejemplos prácticos de uso de árboles
 * Incluye diferentes tipos de árboles y casos de uso comunes
 */

import { BinarySearchTree, TreeNode } from './BinaryTree';

// Ejemplo 1: Árbol de expresión matemática
export class ExpressionTree {
  root: TreeNode<string> | null;

  constructor() {
    this.root = null;
  }

  // Construir árbol de expresión desde notación postfija
  buildFromPostfix(postfix: string[]): void {
    const stack: TreeNode<string>[] = [];

    for (const token of postfix) {
      if (this.isOperator(token)) {
        const right = stack.pop()!;
        const left = stack.pop()!;
        const node = new TreeNode(token);
        node.left = left;
        node.right = right;
        stack.push(node);
      } else {
        stack.push(new TreeNode(token));
      }
    }

    this.root = stack.pop() || null;
  }

  private isOperator(token: string): boolean {
    return ['+', '-', '*', '/', '^'].includes(token);
  }

  // Evaluar la expresión
  evaluate(): number {
    return this.evaluateNode(this.root);
  }

  private evaluateNode(node: TreeNode<string> | null): number {
    if (!node) return 0;

    if (!this.isOperator(node.value)) {
      return parseFloat(node.value);
    }

    const left = this.evaluateNode(node.left);
    const right = this.evaluateNode(node.right);

    switch (node.value) {
      case '+': return left + right;
      case '-': return left - right;
      case '*': return left * right;
      case '/': return right !== 0 ? left / right : 0;
      case '^': return Math.pow(left, right);
      default: return 0;
    }
  }

  // Imprimir expresión en notación infija
  toInfix(): string {
    return this.infixHelper(this.root);
  }

  private infixHelper(node: TreeNode<string> | null): string {
    if (!node) return '';
    
    if (!this.isOperator(node.value)) {
      return node.value;
    }

    const left = this.infixHelper(node.left);
    const right = this.infixHelper(node.right);
    
    return `(${left} ${node.value} ${right})`;
  }
}

// Ejemplo 2: Árbol de decisión simple
export class DecisionTree {
  root: TreeNode<string> | null;

  constructor() {
    this.root = null;
  }

  // Construir árbol de decisión para clasificación
  buildDecisionTree(): void {
    this.root = new TreeNode("¿Es un animal?");
    this.root.left = new TreeNode("¿Vive en el agua?");
    this.root.right = new TreeNode("¿Es un vehículo?");
    
    this.root.left.left = new TreeNode("Pez");
    this.root.left.right = new TreeNode("¿Tiene plumas?");
    this.root.left.right.left = new TreeNode("Pingüino");
    this.root.left.right.right = new TreeNode("Mamífero acuático");
    
    this.root.right.left = new TreeNode("¿Tiene ruedas?");
    this.root.right.right = new TreeNode("¿Vuela?");
    this.root.right.left.left = new TreeNode("Coche");
    this.root.right.left.right = new TreeNode("Barco");
    this.root.right.right.left = new TreeNode("Avión");
    this.root.right.right.right = new TreeNode("Cohete");
  }

  // Clasificar un objeto basado en características
  classify(characteristics: string[]): string {
    return this.classifyHelper(this.root, characteristics, 0);
  }

  private classifyHelper(node: TreeNode<string> | null, characteristics: string[], index: number): string {
    if (!node) return "No clasificado";
    
    if (!node.left && !node.right) {
      return node.value; // Nodo hoja - resultado
    }

    const question = node.value;
    const answer = characteristics[index] || "no";
    
    if (answer.toLowerCase() === "sí" || answer.toLowerCase() === "si" || answer.toLowerCase() === "yes") {
      return this.classifyHelper(node.left, characteristics, index + 1);
    } else {
      return this.classifyHelper(node.right, characteristics, index + 1);
    }
  }
}

// Ejemplo 3: Árbol de búsqueda con operaciones avanzadas
export class AdvancedBST<T> extends BinarySearchTree<T> {
  /**
   * Encuentra el k-ésimo elemento más pequeño
   * Complejidad: O(n)
   */
  findKthSmallest(k: number): T | null {
    const result: T[] = [];
    this.inorderHelper(this.root, result);
    return result[k - 1] || null;
  }

  /**
   * Encuentra el rango de valores entre min y max
   * Complejidad: O(n)
   */
  findRange(min: T, max: T): T[] {
    const result: T[] = [];
    this.rangeHelper(this.root, min, max, result);
    return result;
  }

  private rangeHelper(node: TreeNode<T> | null, min: T, max: T, result: T[]): void {
    if (!node) return;

    if (node.value > min) {
      this.rangeHelper(node.left, min, max, result);
    }

    if (node.value >= min && node.value <= max) {
      result.push(node.value);
    }

    if (node.value < max) {
      this.rangeHelper(node.right, min, max, result);
    }
  }

  /**
   * Verifica si dos árboles son idénticos
   * Complejidad: O(n)
   */
  isIdentical(other: AdvancedBST<T>): boolean {
    return this.identicalHelper(this.root, other.root);
  }

  private identicalHelper(node1: TreeNode<T> | null, node2: TreeNode<T> | null): boolean {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    
    return node1.value === node2.value &&
           this.identicalHelper(node1.left, node2.left) &&
           this.identicalHelper(node1.right, node2.right);
  }

  /**
   * Convierte el BST a un array ordenado
   * Complejidad: O(n)
   */
  toSortedArray(): T[] {
    return this.inorderTraversal();
  }
}

// Función para demostrar todos los ejemplos
export function runTreeExamples(): void {
  console.log("🌳 EJEMPLOS PRÁCTICOS DE ÁRBOLES\n");

  // Ejemplo 1: Árbol de expresión
  console.log("1️⃣ ÁRBOL DE EXPRESIÓN MATEMÁTICA");
  console.log("=====================================");
  
  const exprTree = new ExpressionTree();
  const postfix = ["3", "4", "+", "2", "*", "7", "/"];
  exprTree.buildFromPostfix(postfix);
  
  console.log(`Expresión postfija: ${postfix.join(' ')}`);
  console.log(`Expresión infija: ${exprTree.toInfix()}`);
  console.log(`Resultado: ${exprTree.evaluate()}`);
  console.log();

  // Ejemplo 2: Árbol de decisión
  console.log("2️⃣ ÁRBOL DE DECISIÓN");
  console.log("====================");
  
  const decisionTree = new DecisionTree();
  decisionTree.buildDecisionTree();
  
  const testCases = [
    ["sí", "sí", "no"], // Debería ser "Pez"
    ["sí", "no", "sí"], // Debería ser "Pingüino"
    ["no", "sí", "no"], // Debería ser "Coche"
    ["no", "no", "sí"]  // Debería ser "Avión"
  ];
  
  testCases.forEach((characteristics, index) => {
    const result = decisionTree.classify(characteristics);
    console.log(`Caso ${index + 1} ${characteristics.join(', ')} → ${result}`);
  });
  console.log();

  // Ejemplo 3: BST avanzado
  console.log("3️⃣ BST AVANZADO");
  console.log("===============");
  
  const advancedBST = new AdvancedBST<number>();
  const numbers = [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45];
  numbers.forEach(num => advancedBST.insert(num));
  
  console.log(`Array original: ${numbers}`);
  console.log(`Array ordenado: ${advancedBST.toSortedArray()}`);
  console.log(`3er elemento más pequeño: ${advancedBST.findKthSmallest(3)}`);
  console.log(`Elementos entre 25 y 60: ${advancedBST.findRange(25, 60)}`);
  console.log(`Altura del árbol: ${advancedBST.height()}`);
  console.log();

  // Ejemplo 4: Comparación de árboles
  console.log("4️⃣ COMPARACIÓN DE ÁRBOLES");
  console.log("==========================");
  
  const tree1 = new AdvancedBST<number>();
  const tree2 = new AdvancedBST<number>();
  
  [1, 2, 3].forEach(num => {
    tree1.insert(num);
    tree2.insert(num);
  });
  
  const tree3 = new AdvancedBST<number>();
  [1, 3, 2].forEach(num => tree3.insert(num));
  
  console.log(`Tree1: ${tree1.toSortedArray()}`);
  console.log(`Tree2: ${tree2.toSortedArray()}`);
  console.log(`Tree3: ${tree3.toSortedArray()}`);
  console.log(`Tree1 y Tree2 son idénticos: ${tree1.isIdentical(tree2)}`);
  console.log(`Tree1 y Tree3 son idénticos: ${tree1.isIdentical(tree3)}`);
  console.log();

  console.log("✅ Todos los ejemplos completados exitosamente!");
}
