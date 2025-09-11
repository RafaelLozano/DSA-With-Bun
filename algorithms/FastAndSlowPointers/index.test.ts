import { detectCycle } from "./index";
import { expect, test, describe } from "bun:test";

describe("detectCycle", () => {
    test("should return true if the cycle is detected", () => {
        expect(detectCycle([22.5, 25.0, 22.5, 25.0, 22.5, 25.0])).toBe(true);
    });

    test("should return false if the cycle is not detected", () => {
        expect(detectCycle([1,2,3,4,5])).toBe(false);
    });

    test("should return true if the cycle is detected", () => {
        expect(detectCycle([22, 23, 24, 22, 23, 24])).toBe(true);
    });

    test("should return true if the cycle is detected", () => {
        expect(detectCycle([22, 23, 24, 25, 23, 22, 24])).toBe(false);
    });

    
});