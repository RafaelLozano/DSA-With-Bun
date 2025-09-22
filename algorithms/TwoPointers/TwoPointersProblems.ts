/**
 * Problemas Avanzados de Two Pointers
 * Casos de uso del mundo real y problemas de entrevistas técnicas
 */

/**
 * PROBLEMA 1: PARTITION ARRAY
 * Particiona array de manera que todos los elementos < k estén antes
 * Complejidad: O(n), Espacio: O(1)
 */
export function partitionArray(nums: number[], k: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    while (left < right && nums[left] < k) left++;
    while (left < right && nums[right] >= k) right--;
    
    if (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }

  return left;
}

/**
 * PROBLEMA 2: FIND ALL ANAGRAMS
 * Encuentra todos los anagramas de una palabra en una cadena
 * Complejidad: O(n), Espacio: O(1)
 */
export function findAnagrams(s: string, p: string): number[] {
  const result: number[] = [];
  const pCount = new Array(26).fill(0);
  const sCount = new Array(26).fill(0);
  
  // Contar caracteres en p
  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  
  let left = 0;
  let right = 0;
  
  while (right < s.length) {
    // Expandir ventana
    sCount[s.charCodeAt(right) - 'a'.charCodeAt(0)]++;
    
    // Si la ventana es muy grande, contraerla
    if (right - left + 1 > p.length) {
      sCount[s.charCodeAt(left) - 'a'.charCodeAt(0)]--;
      left++;
    }
    
    // Verificar si es anagrama
    if (right - left + 1 === p.length && arraysEqual(sCount, pCount)) {
      result.push(left);
    }
    
    right++;
  }
  
  return result;
}

function arraysEqual(a: number[], b: number[]): boolean {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/**
 * PROBLEMA 3: MINIMUM WINDOW SUBSTRING
 * Encuentra la ventana más pequeña que contenga todos los caracteres de t
 * Complejidad: O(n), Espacio: O(1)
 */
export function minWindow(s: string, t: string): string {
  if (s.length < t.length) return "";
  
  const tCount = new Map<string, number>();
  for (const char of t) {
    tCount.set(char, (tCount.get(char) || 0) + 1);
  }
  
  let left = 0;
  let right = 0;
  let minStart = 0;
  let minLength = Infinity;
  let required = tCount.size;
  let formed = 0;
  
  const windowCount = new Map<string, number>();
  
  while (right < s.length) {
    const char = s[right];
    windowCount.set(char, (windowCount.get(char) || 0) + 1);
    
    if (tCount.has(char) && windowCount.get(char) === tCount.get(char)) {
      formed++;
    }
    
    while (left <= right && formed === required) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minStart = left;
      }
      
      const leftChar = s[left];
      windowCount.set(leftChar, windowCount.get(leftChar)! - 1);
      
      if (tCount.has(leftChar) && windowCount.get(leftChar)! < tCount.get(leftChar)!) {
        formed--;
      }
      
      left++;
    }
    
    right++;
  }
  
  return minLength === Infinity ? "" : s.substring(minStart, minStart + minLength);
}

/**
 * PROBLEMA 4: LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
 * Encuentra la longitud de la subcadena más larga sin caracteres repetidos
 * Complejidad: O(n), Espacio: O(1)
 */
export function lengthOfLongestSubstring(s: string): number {
  const charSet = new Set<string>();
  let left = 0;
  let maxLength = 0;
  
  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}

/**
 * PROBLEMA 5: SLIDING WINDOW MAXIMUM
 * Encuentra el máximo en cada ventana deslizante de tamaño k
 * Complejidad: O(n), Espacio: O(k)
 */
export function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = [];
  const deque: number[] = []; // Índices
  
  for (let i = 0; i < nums.length; i++) {
    // Remover índices fuera de la ventana
    while (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }
    
    // Remover elementos menores que el actual
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    
    deque.push(i);
    
    // Agregar máximo de la ventana
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  
  return result;
}

/**
 * PROBLEMA 6: FIND K CLOSEST ELEMENTS
 * Encuentra los k elementos más cercanos a x en un array ordenado
 * Complejidad: O(log n + k), Espacio: O(1)
 */
export function findClosestElements(arr: number[], k: number, x: number): number[] {
  let left = 0;
  let right = arr.length - k;
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  return arr.slice(left, left + k);
}

/**
 * PROBLEMA 7: ROTATE ARRAY
 * Rota array k pasos hacia la derecha usando two pointers
 * Complejidad: O(n), Espacio: O(1)
 */
export function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n;
  
  // Revertir todo el array
  reverse(nums, 0, n - 1);
  // Revertir los primeros k elementos
  reverse(nums, 0, k - 1);
  // Revertir los elementos restantes
  reverse(nums, k, n - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

/**
 * PROBLEMA 8: MOVE ZEROS
 * Mueve todos los ceros al final manteniendo el orden relativo
 * Complejidad: O(n), Espacio: O(1)
 */
export function moveZeroes(nums: number[]): void {
  let slow = 0;
  
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }
}

/**
 * PROBLEMA 9: REMOVE NTH NODE FROM END
 * Remueve el n-ésimo nodo desde el final de una lista enlazada
 * Complejidad: O(n), Espacio: O(1)
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0);
  dummy.next = head;
  
  let first = dummy;
  let second = dummy;
  
  // Mover first n+1 pasos adelante
  for (let i = 0; i <= n; i++) {
    first = first.next!;
  }
  
  // Mover ambos punteros hasta que first llegue al final
  while (first !== null) {
    first = first.next!;
    second = second.next!;
  }
  
  // Remover el nodo
  second.next = second.next!.next;
  
  return dummy.next;
}

/**
 * PROBLEMA 10: MERGE TWO SORTED LISTS
 * Combina dos listas enlazadas ordenadas
 * Complejidad: O(n + m), Espacio: O(1)
 */
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;
  
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  
  // Conectar el resto de la lista no vacía
  current.next = list1 !== null ? list1 : list2;
  
  return dummy.next;
}

/**
 * Función para demostrar todos los problemas avanzados
 */
export function demonstrateAdvancedProblems(): void {
  console.log("🚀 PROBLEMAS AVANZADOS DE TWO POINTERS\n");

  // Problema 1: Partition Array
  console.log("1️⃣ PARTITION ARRAY");
  console.log("==================");
  const partitionArray = [3, 1, 4, 1, 5, 9, 2, 6];
  const k = 4;
  console.log(`Array original: ${partitionArray}`);
  const partitionIndex = partitionArray(partitionArray, k);
  console.log(`Índice de partición: ${partitionIndex}`);
  console.log(`Array particionado: ${partitionArray}`);
  console.log();

  // Problema 2: Find Anagrams
  console.log("2️⃣ FIND ALL ANAGRAMS");
  console.log("====================");
  const anagramString = "cbaebabacd";
  const anagramPattern = "abc";
  console.log(`String: "${anagramString}", Pattern: "${anagramPattern}"`);
  console.log(`Índices de anagramas: ${findAnagrams(anagramString, anagramPattern)}`);
  console.log();

  // Problema 3: Minimum Window Substring
  console.log("3️⃣ MINIMUM WINDOW SUBSTRING");
  console.log("===========================");
  const windowString = "ADOBECODEBANC";
  const windowTarget = "ABC";
  console.log(`String: "${windowString}", Target: "${windowTarget}"`);
  console.log(`Ventana mínima: "${minWindow(windowString, windowTarget)}"`);
  console.log();

  // Problema 4: Longest Substring Without Repeating Characters
  console.log("4️⃣ LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS");
  console.log("=================================================");
  const uniqueString = "abcabcbb";
  console.log(`String: "${uniqueString}"`);
  console.log(`Longitud máxima sin repetir: ${lengthOfLongestSubstring(uniqueString)}`);
  console.log();

  // Problema 5: Sliding Window Maximum
  console.log("5️⃣ SLIDING WINDOW MAXIMUM");
  console.log("=========================");
  const slidingArray = [1, 3, -1, -3, 5, 3, 6, 7];
  const windowSize = 3;
  console.log(`Array: ${slidingArray}, Ventana: ${windowSize}`);
  console.log(`Máximos por ventana: ${maxSlidingWindow(slidingArray, windowSize)}`);
  console.log();

  // Problema 6: Find K Closest Elements
  console.log("6️⃣ FIND K CLOSEST ELEMENTS");
  console.log("==========================");
  const closestArray = [1, 2, 3, 4, 5];
  const k = 4;
  const x = 3;
  console.log(`Array: ${closestArray}, k: ${k}, x: ${x}`);
  console.log(`K elementos más cercanos: ${findClosestElements(closestArray, k, x)}`);
  console.log();

  // Problema 7: Rotate Array
  console.log("7️⃣ ROTATE ARRAY");
  console.log("===============");
  const rotateArray = [1, 2, 3, 4, 5, 6, 7];
  const rotateK = 3;
  console.log(`Array original: ${rotateArray}`);
  rotate(rotateArray, rotateK);
  console.log(`Array rotado ${rotateK} pasos: ${rotateArray}`);
  console.log();

  // Problema 8: Move Zeros
  console.log("8️⃣ MOVE ZEROS");
  console.log("=============");
  const zeroArray = [0, 1, 0, 3, 12];
  console.log(`Array original: ${zeroArray}`);
  moveZeroes(zeroArray);
  console.log(`Array con ceros al final: ${zeroArray}`);
  console.log();

  console.log("✅ Todos los problemas avanzados completados!");
}
