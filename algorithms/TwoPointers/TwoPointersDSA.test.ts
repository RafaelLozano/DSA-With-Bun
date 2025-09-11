import { findPairTarget } from "./TwoPointersDSA";
import { expect, test, describe } from "bun:test";

describe("findPairTarget", () => {
    test("should return the indices of the two numbers that add up to the target", () => {
        expect(findPairTarget([2,7,11,15], 9)).toEqual([0,1]);
    });

    test("should return the indices of the two numbers that add up to the target", () => {
        expect(findPairTarget([3,2,4], 6)).toEqual([1,2]);
    });
    
    test("should return the indices of the two numbers that add up to the target", () => {
        expect(findPairTarget([3,3], 6)).toEqual([0,1]);
    });

    test("should return the indices of the two numbers that add up to the target", () => {
        expect(findPairTarget([2,5,5,11], 10)).toEqual([1,2]);
    });
});