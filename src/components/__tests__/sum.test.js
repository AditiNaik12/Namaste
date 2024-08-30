import { sum } from "../sum";

test("Should be sum of two numbers", () => {
   const results = sum(3, 4);

  expect(results).toBe(7);
});
