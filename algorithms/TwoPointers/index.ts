/**
 * Punto de entrada principal para ejemplos de Two Pointers
 * Incluye todos los ejemplos básicos y problemas avanzados
 */

import { demonstrateTwoPointers } from './TwoPointersExamples';
import { demonstrateAdvancedProblems } from './TwoPointersProblems';
import { findPairTarget } from './TwoPointersDSA';

/**
 * Función principal que ejecuta todos los ejemplos de Two Pointers
 */
export function runAllTwoPointersExamples(): void {
  console.log("🎯🎯🎯 EJEMPLOS COMPLETOS DE TWO POINTERS 🎯🎯🎯\n");
  
  // Ejemplo básico original
  console.log("📚 EJEMPLO BÁSICO ORIGINAL");
  console.log("==========================");
  const basicArray = [2, 7, 11, 15];
  const target = 9;
  console.log(`Array: ${basicArray}, Target: ${target}`);
  console.log(`Índices que suman ${target}: ${findPairTarget(basicArray, target)}`);
  console.log();

  console.log("=".repeat(60) + "\n");
  
  // Ejecutar ejemplos reales
  demonstrateTwoPointers();
  
  console.log("\n" + "=".repeat(60) + "\n");
  
  // Ejecutar problemas avanzados
  demonstrateAdvancedProblems();
}

/**
 * Función para ejecutar solo ejemplos básicos
 */
export function runBasicExamples(): void {
  console.log("🎯 EJEMPLOS BÁSICOS DE TWO POINTERS\n");
  demonstrateTwoPointers();
}

/**
 * Función para ejecutar solo problemas avanzados
 */
export function runAdvancedProblems(): void {
  console.log("🚀 PROBLEMAS AVANZADOS DE TWO POINTERS\n");
  demonstrateAdvancedProblems();
}

// Ejecutar automáticamente si se llama directamente
if (require.main === module) {
  runAllTwoPointersExamples();
}
