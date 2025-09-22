/**
 * Tests para ejemplos reales de Two Pointers
 */

import { expect, test, describe } from "bun:test";
import {
  isPalindrome,
  removeDuplicates,
  maxArea,
  threeSum,
  sortColors,
  isSubsequence,
  sortedSquares,
  removeElement,
  merge,
  isValidParentheses,
  longestPalindrome,
  trap
} from "./TwoPointersExamples";

describe("Two Pointers Examples", () => {
  describe("isPalindrome", () => {
    test("debería validar palíndromos correctamente", () => {
      expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
      expect(isPalindrome("race a car")).toBe(false);
      expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true);
      expect(isPalindrome("")).toBe(true);
      expect(isPalindrome("a")).toBe(true);
    });
  });

  describe("removeDuplicates", () => {
    test("debería remover duplicados de array ordenado", () => {
      const nums1 = [1, 1, 2, 2, 2, 3, 4, 4, 5];
      expect(removeDuplicates(nums1)).toBe(5);
      expect(nums1.slice(0, 5)).toEqual([1, 2, 3, 4, 5]);

      const nums2 = [1, 2, 3, 4, 5];
      expect(removeDuplicates(nums2)).toBe(5);
      expect(nums2).toEqual([1, 2, 3, 4, 5]);

      const nums3: number[] = [];
      expect(removeDuplicates(nums3)).toBe(0);
    });
  });

  describe("maxArea", () => {
    test("debería calcular el área máxima correctamente", () => {
      expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
      expect(maxArea([1, 1])).toBe(1);
      expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
    });
  });

  describe("threeSum", () => {
    test("debería encontrar tripletes que sumen cero", () => {
      const result = threeSum([-1, 0, 1, 2, -1, -4]);
      expect(result).toHaveLength(2);
      expect(result).toContainEqual([-1, -1, 2]);
      expect(result).toContainEqual([-1, 0, 1]);

      expect(threeSum([0, 1, 1])).toEqual([]);
      expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
    });
  });

  describe("sortColors", () => {
    test("debería ordenar colores correctamente", () => {
      const nums1 = [2, 0, 2, 1, 1, 0];
      sortColors(nums1);
      expect(nums1).toEqual([0, 0, 1, 1, 2, 2]);

      const nums2 = [2, 0, 1];
      sortColors(nums2);
      expect(nums2).toEqual([0, 1, 2]);

      const nums3 = [0];
      sortColors(nums3);
      expect(nums3).toEqual([0]);
    });
  });

  describe("isSubsequence", () => {
    test("debería validar subsequences correctamente", () => {
      expect(isSubsequence("ace", "abcde")).toBe(true);
      expect(isSubsequence("axc", "ahbgdc")).toBe(false);
      expect(isSubsequence("", "ahbgdc")).toBe(true);
      expect(isSubsequence("b", "c")).toBe(false);
    });
  });

  describe("sortedSquares", () => {
    test("debería retornar cuadrados ordenados", () => {
      expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
      expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
      expect(sortedSquares([-5, -3, -2, -1])).toEqual([1, 4, 9, 25]);
    });
  });

  describe("removeElement", () => {
    test("debería remover elementos correctamente", () => {
      const nums1 = [3, 2, 2, 3];
      expect(removeElement(nums1, 3)).toBe(2);
      expect(nums1.slice(0, 2)).toEqual([2, 2]);

      const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
      expect(removeElement(nums2, 2)).toBe(5);
      expect(nums2.slice(0, 5)).toEqual([0, 1, 3, 0, 4]);
    });
  });

  describe("merge", () => {
    test("debería mergear arrays ordenados correctamente", () => {
      const nums1 = [1, 2, 3, 0, 0, 0];
      const nums2 = [2, 5, 6];
      merge(nums1, 3, nums2, 3);
      expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);

      const nums3 = [1];
      const nums4: number[] = [];
      merge(nums3, 1, nums4, 0);
      expect(nums3).toEqual([1]);

      const nums5 = [0];
      const nums6 = [1];
      merge(nums5, 0, nums6, 1);
      expect(nums5).toEqual([1]);
    });
  });

  describe("isValidParentheses", () => {
    test("debería validar paréntesis balanceados", () => {
      expect(isValidParentheses("()")).toBe(true);
      expect(isValidParentheses("()[]{}")).toBe(true);
      expect(isValidParentheses("(]")).toBe(false);
      expect(isValidParentheses("([)]")).toBe(false);
      expect(isValidParentheses("{[]}")).toBe(true);
    });
  });

  describe("longestPalindrome", () => {
    test("debería encontrar el palíndromo más largo", () => {
      expect(longestPalindrome("babad")).toBe("bab");
      expect(longestPalindrome("cbbd")).toBe("bb");
      expect(longestPalindrome("racecar")).toBe("racecar");
      expect(longestPalindrome("a")).toBe("a");
    });
  });

  describe("trap", () => {
    test("debería calcular agua atrapada correctamente", () => {
      expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
      expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
      expect(trap([3, 0, 2, 0, 4])).toBe(7);
      expect(trap([1, 2, 3, 4, 5])).toBe(0);
    });
  });
});
