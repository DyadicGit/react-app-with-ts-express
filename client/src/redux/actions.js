import { TEST } from "./actionTypes";

export function test(text) {
  return {
    type: TEST,
    text
  }
};

