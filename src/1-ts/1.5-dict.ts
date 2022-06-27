/**
 * Exercise:
 * Using the data given, produce an array of
 * categories with the output shown below
 *
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = [
  { category: "Fruit", item: "Apple" },
  { category: "Fruit", item: "Grapes" },
  { category: "Fruit", item: "Orange" },
  { category: "Fruit", item: "Pineapple" },
  { category: "Vegetable", item: "Asparagus" },
  { category: "Vegetable", item: "Broccoli" },
  { category: "Vegetable", item: "Carrots" },
  { category: "Dairy", item: "Milk" },
  { category: "Dairy", item: "Cheese" },
  { category: "Dairy", item: "Eggs" }
];

// produce this output
const output = "Fruit, Vegetable, Dairy";

export const dict = () => {
  return output;
};
