/**
 * Tests para problemas avanzados de Two Pointers
 */

import { expect, test, describe } from "bun:test";
import {
  partitionArray,
  findAnagrams,
  minWindow,
  lengthOfLongestSubstring,
  maxSlidingWindow,
  findClosestElements,
  rotate,
  moveZeroes,
  removeNthFromEnd,
  mergeTwoLists,
  ListNode
} from "./TwoPointersProblems";

describe("Two Pointers Advanced Problems", () => {
  describe("partitionArray", () => {
    test("debería particionar array correctamente", () => {
      const nums1 = [3, 1, 4, 1, 5, 9, 2, 6];
      const k1 = 4;
      const result1 = partitionArray(nums1, k1);
      expect(result1).toBeGreaterThan(0);
      expect(nums1.slice(0, result1).every(n => n < k1)).toBe(true);
      expect(nums1.slice(result1).every(n => n >= k1)).toBe(true);

      const nums2 = [1, 2, 3, 4, 5];
      const k2 = 3;
      const result2 = partitionArray(nums2, k2);
      expect(result2).toBe(2);
    });
  });

  describe("findAnagrams", () => {
    test("debería encontrar anagramas correctamente", () => {
      expect(findAnagrams("cbaebabacd", "abc")).toEqual([0, 6]);
      expect(findAnagrams("abab", "ab")).toEqual([0, 1, 2]);
      expect(findAnagrams("", "a")).toEqual([]);
    });
  });

  describe("minWindow", () => {
    test("debería encontrar ventana mínima correctamente", () => {
      expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
      expect(minWindow("a", "a")).toBe("a");
      expect(minWindow("a", "aa")).toBe("");
    });
  });

  describe("lengthOfLongestSubstring", () => {
    test("debería encontrar longitud máxima sin repetir", () => {
      expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
      expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
      expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
      expect(lengthOfLongestSubstring("")).toBe(0);
    });
  });

  describe("maxSlidingWindow", () => {
    test("debería encontrar máximos en ventana deslizante", () => {
      expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7]);
      expect(maxSlidingWindow([1], 1)).toEqual([1]);
      expect(maxSlidingWindow([1, -1], 1)).toEqual([1, -1]);
    });
  });

  describe("findClosestElements", () => {
    test("debería encontrar k elementos más cercanos", () => {
      expect(findClosestElements([1, 2, 3, 4, 5], 4, 3)).toEqual([1, 2, 3, 4]);
      expect(findClosestElements([1, 2, 3, 4, 5], 4, -1)).toEqual([1, 2, 3, 4]);
      expect(findClosestElements([1, 2, 3, 4, 5], 2, 3)).toEqual([2, 3]);
    });
  });

  describe("rotate", () => {
    test("debería rotar array correctamente", () => {
      const nums1 = [1, 2, 3, 4, 5, 6, 7];
      rotate(nums1, 3);
      expect(nums1).toEqual([5, 6, 7, 1, 2, 3, 4]);

      const nums2 = [-1, -100, 3, 99];
      rotate(nums2, 2);
      expect(nums2).toEqual([3, 99, -1, -100]);

      const nums3 = [1, 2];
      rotate(nums3, 1);
      expect(nums3).toEqual([2, 1]);
    });
  });

  describe("moveZeroes", () => {
    test("debería mover ceros al final", () => {
      const nums1 = [0, 1, 0, 3, 12];
      moveZeroes(nums1);
      expect(nums1).toEqual([1, 3, 12, 0, 0]);

      const nums2 = [0];
      moveZeroes(nums2);
      expect(nums2).toEqual([0]);

      const nums3 = [1, 2, 3];
      moveZeroes(nums3);
      expect(nums3).toEqual([1, 2, 3]);
    });
  });

  describe("removeNthFromEnd", () => {
    test("debería remover n-ésimo nodo desde el final", () => {
      // Crear lista: 1 -> 2 -> 3 -> 4 -> 5
      const head = new ListNode(1);
      head.next = new ListNode(2);
      head.next.next = new ListNode(3);
      head.next.next.next = new ListNode(4);
      head.next.next.next.next = new ListNode(5);

      const result = removeNthFromEnd(head, 2);
      expect(result?.val).toBe(1);
      expect(result?.next?.val).toBe(2);
      expect(result?.next?.next?.val).toBe(3);
      expect(result?.next?.next?.next?.val).toBe(5);
    });

    test("debería remover el primer nodo", () => {
      const head = new ListNode(1);
      head.next = new ListNode(2);

      const result = removeNthFromEnd(head, 2);
      expect(result?.val).toBe(2);
      expect(result?.next).toBeNull();
    });
  });

  describe("mergeTwoLists", () => {
    test("debería mergear dos listas ordenadas", () => {
      const list1 = new ListNode(1);
      list1.next = new ListNode(2);
      list1.next.next = new ListNode(4);

      const list2 = new ListNode(1);
      list2.next = new ListNode(3);
      list2.next.next = new ListNode(4);

      const result = mergeTwoLists(list1, list2);
      expect(result?.val).toBe(1);
      expect(result?.next?.val).toBe(1);
      expect(result?.next?.next?.val).toBe(2);
      expect(result?.next?.next?.next?.val).toBe(3);
      expect(result?.next?.next?.next?.next?.val).toBe(4);
      expect(result?.next?.next?.next?.next?.next?.val).toBe(4);
    });

    test("debería manejar listas vacías", () => {
      const result1 = mergeTwoLists(null, null);
      expect(result1).toBeNull();

      const list2 = new ListNode(0);
      const result2 = mergeTwoLists(null, list2);
      expect(result2?.val).toBe(0);
    });
  });
});
