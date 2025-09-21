/**
 * Punto de entrada principal para los ejemplos de árboles
 * Ejecuta todas las demostraciones y ejemplos
 */

import { demonstrateBinaryTree } from './BinaryTree';
import { runTreeExamples } from './tree-examples';

// Función principal que ejecuta todos los ejemplos
export function runAllTreeExamples(): void {
  console.log("🌳🌳🌳 EJEMPLOS COMPLETOS DE ÁRBOLES 🌳🌳🌳\n");
  
  // Ejecutar demostración básica de BST
  demonstrateBinaryTree();
  
  console.log("\n" + "=".repeat(60) + "\n");
  
  // Ejecutar ejemplos avanzados
  runTreeExamples();
}

// Ejecutar automáticamente si se llama directamente
if (require.main === module) {
  runAllTreeExamples();
}
