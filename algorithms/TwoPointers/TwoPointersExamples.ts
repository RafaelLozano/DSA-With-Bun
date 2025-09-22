/**
 * Ejemplos Reales y Prácticos de Two Pointers
 * Incluye problemas clásicos y casos de uso del mundo real
 */

/**
 * 1. VALIDACIÓN DE PALÍNDROMO
 * Verifica si una cadena es un palíndromo (se lee igual de izquierda a derecha)
 * Complejidad: O(n), Espacio: O(1)
 */
export function isPalindrome(s: string): boolean {
  // Limpiar la cadena: solo letras y números, convertir a minúsculas
  const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/**
 * 2. REMOVER ELEMENTOS DUPLICADOS DE ARRAY ORDENADO
 * Elimina duplicados in-place y retorna la nueva longitud
 * Complejidad: O(n), Espacio: O(1)
 */
export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  
  let slow = 0;
  
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  
  return slow + 1;
}

/**
 * 3. CONTAINER WITH MOST WATER
 * Encuentra dos líneas que formen el contenedor con más agua
 * Complejidad: O(n), Espacio: O(1)
 */
export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const currentArea = width * minHeight;
    maxWater = Math.max(maxWater, currentArea);

    // Mover el puntero del lado con menor altura
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

/**
 * 4. TRIPLET SUM ZERO
 * Encuentra todos los tripletes únicos que sumen cero
 * Complejidad: O(n²), Espacio: O(1)
 */
export function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Evitar duplicados
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    const target = -nums[i];

    while (left < right) {
      const sum = nums[left] + nums[right];
      
      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);
        
        // Evitar duplicados
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

/**
 * 5. SORT COLORS (DUTCH NATIONAL FLAG)
 * Ordena array con solo 0s, 1s y 2s en una sola pasada
 * Complejidad: O(n), Espacio: O(1)
 */
export function sortColors(nums: number[]): void {
  let low = 0;      // Posición para 0s
  let mid = 0;      // Posición actual
  let high = nums.length - 1; // Posición para 2s

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else { // nums[mid] === 2
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

/**
 * 6. VALIDACIÓN DE SUBSEQUENCE
 * Verifica si una cadena es subsequence de otra
 * Complejidad: O(n), Espacio: O(1)
 */
export function isSubsequence(s: string, t: string): boolean {
  let sIndex = 0;
  let tIndex = 0;

  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }
    tIndex++;
  }

  return sIndex === s.length;
}

/**
 * 7. SQUARES OF SORTED ARRAY
 * Retorna array de cuadrados ordenados de un array ordenado
 * Complejidad: O(n), Espacio: O(n)
 */
export function sortedSquares(nums: number[]): number[] {
  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;

  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[index] = leftSquare;
      left++;
    } else {
      result[index] = rightSquare;
      right--;
    }
    index--;
  }

  return result;
}

/**
 * 8. REMOVE ELEMENT
 * Remueve todas las instancias de un valor in-place
 * Complejidad: O(n), Espacio: O(1)
 */
export function removeElement(nums: number[], val: number): number {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  return slow;
}

/**
 * 9. MERGE SORTED ARRAYS
 * Merge dos arrays ordenados en el primero
 * Complejidad: O(m + n), Espacio: O(1)
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;      // Último elemento de nums1
  let j = n - 1;      // Último elemento de nums2
  let k = m + n - 1;  // Última posición de nums1

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // Copiar elementos restantes de nums2
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

/**
 * 10. VALIDACIÓN DE PARÉNTESIS BALANCEADOS
 * Verifica si los paréntesis están balanceados usando two pointers
 * Complejidad: O(n), Espacio: O(1)
 */
export function isValidParentheses(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  const pairs: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  while (left < right) {
    const leftChar = s[left];
    const rightChar = s[right];

    if (pairs[leftChar] === rightChar) {
      left++;
      right--;
    } else if (pairs[leftChar] && pairs[rightChar]) {
      // Ambos son de apertura, buscar el de cierre correspondiente
      return false;
    } else if (pairs[leftChar]) {
      right--;
    } else if (pairs[rightChar]) {
      left++;
    } else {
      left++;
      right--;
    }
  }

  return left >= right;
}

/**
 * 11. LONGEST PALINDROME SUBSTRING
 * Encuentra el palíndromo más largo en una cadena
 * Complejidad: O(n²), Espacio: O(1)
 */
export function longestPalindrome(s: string): string {
  let start = 0;
  let maxLength = 1;

  function expandAroundCenter(left: number, right: number): number {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    // Palíndromo de longitud impar
    const len1 = expandAroundCenter(i, i);
    // Palíndromo de longitud par
    const len2 = expandAroundCenter(i, i + 1);
    
    const maxLen = Math.max(len1, len2);
    
    if (maxLen > maxLength) {
      maxLength = maxLen;
      start = i - Math.floor((maxLen - 1) / 2);
    }
  }

  return s.substring(start, start + maxLength);
}

/**
 * 12. TRAPPING RAIN WATER
 * Calcula cuánta agua se puede atrapar entre barras
 * Complejidad: O(n), Espacio: O(1)
 */
export function trap(height: number[]): number {
  if (height.length < 3) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
}

/**
 * Función para demostrar todos los ejemplos
 */
export function demonstrateTwoPointers(): void {
  console.log("🎯 EJEMPLOS REALES DE TWO POINTERS\n");

  // Ejemplo 1: Palíndromo
  console.log("1️⃣ VALIDACIÓN DE PALÍNDROMO");
  console.log("=============================");
  const palindromes = ["A man a plan a canal Panama", "race a car", "Was it a car or a cat I saw?"];
  palindromes.forEach(str => {
    console.log(`"${str}" → ${isPalindrome(str)}`);
  });
  console.log();

  // Ejemplo 2: Remover duplicados
  console.log("2️⃣ REMOVER DUPLICADOS");
  console.log("=====================");
  const duplicates = [1, 1, 2, 2, 2, 3, 4, 4, 5];
  console.log(`Array original: ${duplicates}`);
  const newLength = removeDuplicates(duplicates);
  console.log(`Nueva longitud: ${newLength}`);
  console.log(`Array sin duplicados: ${duplicates.slice(0, newLength)}`);
  console.log();

  // Ejemplo 3: Container with most water
  console.log("3️⃣ CONTAINER WITH MOST WATER");
  console.log("=============================");
  const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  console.log(`Alturas: ${heights}`);
  console.log(`Máxima área: ${maxArea(heights)}`);
  console.log();

  // Ejemplo 4: Three Sum
  console.log("4️⃣ THREE SUM");
  console.log("=============");
  const threeSumArray = [-1, 0, 1, 2, -1, -4];
  console.log(`Array: ${threeSumArray}`);
  console.log(`Tripletes que suman 0: ${JSON.stringify(threeSum(threeSumArray))}`);
  console.log();

  // Ejemplo 5: Sort Colors
  console.log("5️⃣ SORT COLORS");
  console.log("==============");
  const colors = [2, 0, 2, 1, 1, 0];
  console.log(`Array original: ${colors}`);
  sortColors(colors);
  console.log(`Array ordenado: ${colors}`);
  console.log();

  // Ejemplo 6: Subsequence
  console.log("6️⃣ VALIDACIÓN DE SUBSEQUENCE");
  console.log("=============================");
  const subsequenceTests = [
    ["ace", "abcde"],
    ["axc", "ahbgdc"],
    ["", "ahbgdc"]
  ];
  subsequenceTests.forEach(([s, t]) => {
    console.log(`"${s}" es subsequence de "${t}": ${isSubsequence(s, t)}`);
  });
  console.log();

  // Ejemplo 7: Sorted Squares
  console.log("7️⃣ SQUARES OF SORTED ARRAY");
  console.log("===========================");
  const squaresArray = [-4, -1, 0, 3, 10];
  console.log(`Array original: ${squaresArray}`);
  console.log(`Cuadrados ordenados: ${sortedSquares(squaresArray)}`);
  console.log();

  // Ejemplo 8: Remove Element
  console.log("8️⃣ REMOVE ELEMENT");
  console.log("==================");
  const removeArray = [3, 2, 2, 3];
  const valToRemove = 3;
  console.log(`Array original: ${removeArray}`);
  const newLength2 = removeElement(removeArray, valToRemove);
  console.log(`Nueva longitud: ${newLength2}`);
  console.log(`Array sin ${valToRemove}: ${removeArray.slice(0, newLength2)}`);
  console.log();

  // Ejemplo 9: Merge Sorted Arrays
  console.log("9️⃣ MERGE SORTED ARRAYS");
  console.log("=======================");
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;
  console.log(`nums1: ${nums1.slice(0, m)}, nums2: ${nums2}`);
  merge(nums1, m, nums2, n);
  console.log(`Array mergeado: ${nums1}`);
  console.log();

  // Ejemplo 10: Longest Palindrome
  console.log("🔟 LONGEST PALINDROME");
  console.log("=====================");
  const palindromeStrings = ["babad", "cbbd", "racecar"];
  palindromeStrings.forEach(str => {
    console.log(`"${str}" → "${longestPalindrome(str)}"`);
  });
  console.log();

  // Ejemplo 11: Trapping Rain Water
  console.log("1️⃣1️⃣ TRAPPING RAIN WATER");
  console.log("=========================");
  const rainHeights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  console.log(`Alturas: ${rainHeights}`);
  console.log(`Agua atrapada: ${trap(rainHeights)} unidades`);
  console.log();

  console.log("✅ Todos los ejemplos de Two Pointers completados!");
}
